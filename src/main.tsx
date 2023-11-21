import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';

import './style/index.css';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
		<BrowserRouter>
			<Header />
			<Routes>
					<Route path="/" element={<Home />}></Route>
			</Routes>
		</BrowserRouter>
	</ThemeProvider>
)
