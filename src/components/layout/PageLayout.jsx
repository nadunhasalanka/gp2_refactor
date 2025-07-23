import { useState } from "react";
import Sidebar from "./Sidebar";
import { useAuth } from '../../hooks/useAuth';

/**
 * Page Layout component that includes sidebar and main content area
 * @param {Object} user - User information to display in sidebar
 * @param {React.ReactNode} children - Content to display in the main area
 * @param {boolean} defaultExpanded - Whether the sidebar is expanded by default
 */
const PageLayout = ({ 
    children,
    defaultExpanded = true 
}) => {
    const [sidebarExpanded, setSidebarExpanded] = useState(defaultExpanded);
    
    // Handle sidebar toggle
    const handleSidebarToggle = (expanded) => {
        setSidebarExpanded(expanded);
    };

    const { currentUser, loading: authLoading } = useAuth();

    const user = currentUser ? {
        name: currentUser.fullName,
        email: currentUser.email,
        role: currentUser.role.toLowerCase()
    } : null;

    if (authLoading || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }
    
    return (
        <div className="flex min-h-screen bg-white">
            <Sidebar 
                user={user}
                onToggle={handleSidebarToggle}
            />
            <div 
                className="flex-grow overflow-y-auto transition-all duration-300"
                style={{ 
                    marginLeft: sidebarExpanded ? '16rem' : '5rem' // 16rem = 256px (w-64), 5rem = 80px (w-20)
                }}
            >
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PageLayout;