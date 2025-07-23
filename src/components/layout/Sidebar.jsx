import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/white_logo.png';
import miniLogo from '../../assets/images/mini_logo_white.png';
import UserProfileDropdown from './UserProfileDropdown';
import Navigation from './Navigation';
import { getMenuItemsByRole, getHomeRouteByRole, getRoleDisplayName } from '../../utils/navigationUtils';

/**
 * Reusable sidebar component that adapts to user role
 * @param {Object} user - User information including role
 * @param {boolean} defaultExpanded - Whether the sidebar is expanded by default
 * @param {Function} onToggle - Callback when sidebar is toggled
 * @param {string} className - Additional CSS classes
 */
const Sidebar = ({
    user = null,
    defaultExpanded = true,
    onToggle = () => { },
    className = '',
}) => {
    const [expanded, setExpanded] = useState(defaultExpanded);

    // Determine which menu items to show based on user role
    const menuItems = getMenuItemsByRole(user?.role || 'lawyer');

    // Notify parent component when expanded state changes
    useEffect(() => {
        onToggle(expanded);
    }, [expanded, onToggle]);

    // Toggle sidebar expanded state
    const toggleSidebar = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="fixed top-0 left-0 h-screen z-40">
            <aside
                className={`
                    flex flex-col h-screen bg-black text-white transition-all duration-300 shadow-lg
                    ${expanded ? 'w-64' : 'w-20'} 
                    ${className}
                `}
            >
                {/* Logo only */}
                <div className="p-5">
                    <Link to={getHomeRouteByRole(user?.role)} className="flex items-center">
                        {expanded ? (
                            <img src={logo} alt="attorney." className="h-8" />
                        ) : (
                            <img src={miniLogo} alt="a." className="h-6" />
                        )}
                    </Link>
                </div>

                {/* Menu items */}
                <Navigation items={menuItems.map(item => ({ ...item, expanded }))} />

                {/* Role indicator */}
                {expanded && user?.role && (
                    <div className="px-6 py-2 bg-gray-800">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                            {getRoleDisplayName(user.role)}
                        </span>
                    </div>
                )}

                {/* User profile dropdown */}
                {user && (
                    <div className="mt-auto">
                        <UserProfileDropdown user={user} expanded={expanded} />
                    </div>
                )}
            </aside>

            {/* Toggle button positioned at the edge of the sidebar */}
            <button
                onClick={toggleSidebar}
                className="absolute top-5 -right-3 p-1 w-6 h-6 bg-black rounded-full 
                         hover:bg-gray-800 text-white shadow-md flex items-center justify-center"
            >
                {expanded ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                )}
            </button>
        </div>
    );
};








export default Sidebar;