

// src/contexts/NotificationContext.jsx
import React, { createContext, useState, useEffect, useCallback } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // Add a new notification
  const addNotification = useCallback((notification) => {
    const id = Date.now();
    setNotifications(prev => [
      ...prev,
      { 
        id, 
        ...notification, 
        createdAt: new Date() 
      }
    ]);

    // Auto-remove notification after timeout if autoClose is enabled
    if (notification.autoClose !== false) {
      const timeout = notification.timeout || 5000;
      setTimeout(() => {
        removeNotification(id);
      }, timeout);
    }

    return id;
  }, []);

  // Remove a notification by id
  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  // Mark notification as read
  const markAsRead = useCallback((id) => {
    setNotifications(prev => prev.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  }, []);

  // Clear all notifications
  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  // Get unread count
  const unreadCount = notifications.filter(notification => !notification.read).length;

  const value = {
    notifications,
    addNotification,
    removeNotification,
    markAsRead,
    clearNotifications,
    unreadCount
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};