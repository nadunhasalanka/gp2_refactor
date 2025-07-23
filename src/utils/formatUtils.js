export const formatCurrency = (amount, currency = 'USD') => {
  if (amount === null || amount === undefined) return '$0.00';
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

export const getInitials = (name) => {
  if (!name) return '';
  
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
};

export const truncateText = (text, maxLength = 50) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const truncateEmail = (email, maxLength = 18) => {
  if (!email || email.length <= maxLength) return email;

  const atIndex = email.indexOf('@');
  if (atIndex <= 0) return email.substring(0, maxLength) + '...';

  const username = email.substring(0, atIndex);
  const domain = email.substring(atIndex);

  if (username.length <= 5) {
    const availableSpace = maxLength - username.length;
    if (availableSpace >= 5) {
      return username + domain.substring(0, availableSpace) + '...';
    }
  }

  const availableSpace = maxLength - 3 - domain.length;
  if (availableSpace > 1) {
    return username.substring(0, availableSpace) + '...' + domain;
  }

  return email.substring(0, maxLength) + '...';
};