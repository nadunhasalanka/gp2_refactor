import { useState, useEffect } from "react";
import { getCurrentDate } from "../../utils/dateUtils";
import NotificationDropdown from "./NotificationDropdown";
import { useNotifications } from "../../hooks/useNotifications";

/**
 * Reusable page header component with welcome message, date and notifications
 * @param {object} user - User object with name and other properties
 * @param {number} notificationCount - Number of unread notifications
 * @param {function} onNotificationClick - Handler for notification bell click
 */
const PageHeader = ({ 
    user, 
    initialNotificationCount = 0,
    onNotificationClick = () => console.log("Notification clicked"),
    notifications: externalNotifications = []
}) => {
    const [currentDate, setCurrentDate] = useState("");
    
    const {
        notificationCount,
        notifications,
        markAllAsRead
    } = useNotifications(initialNotificationCount);

    // Default notifications if none provided
    const defaultNotifications = [
        {
            id: 1,
            message: "New message from John Doe",
            time: "10 minutes ago",
            read: false
        },
        {
            id: 2,
            message: "Upcoming hearing for Case #4323",
            time: "1 hour ago",
            read: false
        },
        {
            id: 3,
            message: "Payment received from Alice Johnson",
            time: "3 hours ago",
            read: true
        },
        {
            id: 4,
            message: "Document uploaded for review",
            time: "Yesterday",
            read: true
        }
    ];
    
    useEffect(() => {
        setCurrentDate(getCurrentDate());
    }, []);

    return (
        <div className="flex justify-between items-center w-full">
            <h1 className="text-2xl font-bold">Hello {user?.name || 'User'}, Welcome</h1>
            <div className="flex items-center gap-4">
                <div className="text-gray-500">Today is: {currentDate}</div>
                <NotificationDropdown
                    notificationCount={notificationCount}
                    notifications={externalNotifications.length > 0 ? externalNotifications : defaultNotifications}
                    onNotificationClick={onNotificationClick}
                    onMarkAllAsRead={markAllAsRead}
                />
            </div>
        </div>
    );
};

export default PageHeader;