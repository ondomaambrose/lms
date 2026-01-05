import { createContext, useContext, useState, type ReactNode } from "react";

export interface User {
  name?: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("activeUser");
      return savedUser ? JSON.parse(savedUser) : null;
    }
    return null;
  });

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("activeUser", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("activeUser");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const UseUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UseUser must be used within a UserProvider");
  }
  return context;
};
