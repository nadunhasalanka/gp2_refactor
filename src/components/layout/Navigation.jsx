import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ items, className = '' }) => {
  const location = useLocation();

  return (
    <nav className={`mt-5 flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent ${className}`}>
      <ul>
        {items.map((item, index) => {
          const isActive = location.pathname === item.path || 
                          (item.path !== '/' && location.pathname.startsWith(item.path));
          
          return (
            <li key={index} className="px-3 py-2">
              <Link
                to={item.path}
                className={`
                  flex items-center p-3 rounded-lg transition-colors
                  ${isActive ? 'bg-gray-100 text-black' : 'text-white hover:bg-gray-800'}
                `}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="ml-3 text-sm font-bold">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;