import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Create from './pages/Create';
import Login from './pages/Login';

import { ThemeProvider } from '@/components/config/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

import './style/index.css';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
		<BrowserRouter>
			<Header />
			<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/users" element={<Login /> }></Route>
			</Routes>
			<Footer />
			<Toaster />
		</BrowserRouter>
	</ThemeProvider>
)
