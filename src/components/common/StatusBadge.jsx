import React from 'react';

const StatusBadge = ({ status, type = 'default', className = '' }) => {
  const getStatusClasses = () => {
    const baseClasses = "inline-block px-3 py-1 rounded-full text-xs font-medium";
    
    if (type === 'case') {
      switch (status?.toLowerCase()) {
        case 'open':
          return `${baseClasses} bg-green-100 text-green-700`;
        case 'closed':
          return `${baseClasses} bg-gray-100 text-gray-700`;
        case 'pending':
          return `${baseClasses} bg-yellow-100 text-yellow-700`;
        default:
          return `${baseClasses} bg-blue-100 text-blue-700`;
      }
    }
    
    if (type === 'payment') {
      switch (status?.toLowerCase()) {
        case 'paid':
        case 'paid_in_full':
          return `${baseClasses} bg-green-100 text-green-700`;
        case 'pending':
        case 'partially_paid':
          return `${baseClasses} bg-yellow-100 text-yellow-700`;
        case 'overdue':
          return `${baseClasses} bg-red-100 text-red-700`;
        default:
          return `${baseClasses} bg-gray-100 text-gray-700`;
      }
    }
    
    if (type === 'user') {
      switch (status?.toLowerCase()) {
        case 'active':
          return `${baseClasses} bg-green-100 text-green-700`;
        case 'inactive':
          return `${baseClasses} bg-gray-100 text-gray-700`;
        case 'pending':
          return `${baseClasses} bg-yellow-100 text-yellow-700`;
        default:
          return `${baseClasses} bg-blue-100 text-blue-700`;
      }
    }
    
    // Default styling
    return `${baseClasses} bg-gray-100 text-gray-700`;
  };

  return (
    <span className={`${getStatusClasses()} ${className}`}>
      {status}
    </span>
  );
};

export default StatusBadge;