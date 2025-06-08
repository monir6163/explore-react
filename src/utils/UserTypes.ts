// types.ts
export interface User {
  data: {
    _id: string;
    name: string;
    email: string;
    username: string;
    role: "user" | "admin";
    createdAt: string;
    updatedAt: string;
  };
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  submitting: boolean;
  error: string | null;
  success: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  fetchUser: () => Promise<void>;
}
