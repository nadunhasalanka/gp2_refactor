import { useState, useCallback } from 'react';

export const useNotifications = (initialCount = 0) => {
  const [notificationCount, setNotificationCount] = useState(initialCount);
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((notification) => {
    const newNotification = {
      id: Date.now(),
      read: false,
      time: new Date().toISOString(),
      ...notification
    };
    
    setNotifications(prev => [newNotification, ...prev]);
    setNotificationCount(prev => prev + 1);
  }, []);

  const markAsRead = useCallback((notificationId) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === notificationId 
          ? { ...notification, read: true }
          : notification
      )
    );
    setNotificationCount(prev => Math.max(0, prev - 1));
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
    setNotificationCount(0);
  }, []);

  const clearNotifications = useCallback(() => {
    setNotifications([]);
    setNotificationCount(0);
  }, []);

  return {
    notificationCount,
    notifications,
    addNotification,
    markAsRead,
    markAllAsRead,
    clearNotifications
  };
};