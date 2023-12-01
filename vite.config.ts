import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import react from "@vitejs/plugin-react-swc";
import svgrPlugin from 'vite-plugin-svgr';
import envCompatible from 'vite-plugin-env-compatible';
import path from "path";


export default defineConfig({
    envPrefix: 'REACT_APP_',
    build: {
        outDir: 'build',
    },
    plugins: [
        react(),
        envCompatible(),
        svgrPlugin({
            svgrOptions: {
            icon: true,
        },
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    }
});