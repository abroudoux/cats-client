import { create } from 'zustand';


const useStore = create((set) => ({
    token: Boolean,

    signIn: () => set({ token: true }),
    singOut: () => set({ token: true })
}));