import { create } from 'zustand';


const savedToken = localStorage.getItem('token');

interface Store {
    token: boolean;
    isDeleting: boolean;
    isUpdating: boolean;
    isLoading: boolean;
    isCreating: boolean;
    signIn: () => void;
    signOut: () => void;
    setIsDeleting: (value: boolean) => void;
    setIsUpdating: (value: boolean) => void;
    setIsLoading: (value: boolean) => void;
    setIsCreating: (value: boolean) => void;
};

export const useStore = create<Store>((set) => ({
    token: savedToken ? JSON.parse(savedToken) : false,    
    isDeleting: false,
    isUpdating: false,
    isLoading: false,
    isCreating: false,
    signIn: () => {
        set({ token: true });
        localStorage.setItem('token', JSON.stringify(true));
    },
    signOut: () => {
        set({ token: false });
        localStorage.removeItem('token');
    },
    setIsDeleting: (value: boolean) => set({ isDeleting: value }),
    setIsUpdating: (value: boolean) => set({ isUpdating: value }),
    setIsLoading: (value: boolean) => set({ isLoading: value }),
    setIsCreating: (value: boolean) => set({ isCreating: value }),
}));