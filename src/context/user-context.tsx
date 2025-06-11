'use client';

import React, { createContext, useContext } from 'react';

interface UserContextType {
  userName: string;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: React.ReactNode;
  userName: string;
}

export function UserProvider({ children, userName }: UserProviderProps) {
  return <UserContext.Provider value={{ userName }}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
