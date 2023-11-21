import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import './style/index.css';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
  		<Routes>
				<Route path="/" element={<Home />}></Route>
		</Routes>
	</BrowserRouter>
)
