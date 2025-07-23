export const validateEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

export const validatePassword = (password) => {
  return password && password.length >= 8;
};

export const validateStrongPassword = (password) => {
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return strongPasswordRegex.test(password);
};

export const validateRequired = (value) => {
  return value && value.toString().trim().length > 0;
};

export const validateForm = (formData, rules) => {
  const errors = {};
  
  Object.keys(rules).forEach(field => {
    const rule = rules[field];
    const value = formData[field];
    
    if (rule.required && !validateRequired(value)) {
      errors[field] = `${rule.label || field} is required`;
      return;
    }
    
    if (value && rule.type === 'email' && !validateEmail(value)) {
      errors[field] = 'Invalid email address';
    }
    
    if (value && rule.type === 'phone' && !validatePhone(value)) {
      errors[field] = 'Invalid phone number';
    }
    
    if (value && rule.type === 'password' && !validatePassword(value)) {
      errors[field] = 'Password must be at least 8 characters';
    }
    
    if (value && rule.minLength && value.length < rule.minLength) {
      errors[field] = `Must be at least ${rule.minLength} characters`;
    }
  });
  
  return errors;
};