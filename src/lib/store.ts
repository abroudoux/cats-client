import { create } from 'zustand';


interface Token {
    token: boolean;
    signIn: () => void;
    signOut: () => void;
};

interface Delete {
    delete: boolean;
    signIn: () => void;
    signOut: () => void;
};

interface Update {
    token: boolean;
    signIn: () => void;
    signOut: () => void;
};

export const useTokenStore = create<Token>((set) => ({
    token: false,
    signIn: () => set((state) => ({ token: true })),
    signOut: () => set((state) => ({ token: false })),
}));