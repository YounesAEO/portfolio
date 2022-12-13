import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Motivation from './Motivation';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const route = createBrowserRouter([
	{ path: '/portfolio', element: <App /> },
	{ path: '/motivation', element: <Motivation /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={route} />
	</React.StrictMode>
);
