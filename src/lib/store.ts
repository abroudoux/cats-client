import { create } from 'zustand';


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


export const useTokenStore = create<Store>((set) => ({
    token: false,
    isDeleting: false,
    isUpdating: false,
    isLoading: false,
    isCreating: false,
    signIn: () => set((state) => ({ token: true })),
    signOut: () => set((state) => ({ token: false })),
    setIsDeleting: (value: boolean) => set({ isDeleting: value }),
    setIsUpdating: (value: boolean) => set({ isUpdating: value }),
    setIsLoading: (value: boolean) => set({ isLoading: value }),
    setIsCreating: (value: boolean) => set({ isCreating: value }),
}));