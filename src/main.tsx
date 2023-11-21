import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Create from './pages/Create';

import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import './style/index.css';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
		<BrowserRouter>
			<Header />
			<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/cats" element={<Create /> }></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	</ThemeProvider>
)
