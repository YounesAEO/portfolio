import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	redirect,
	RouterProvider,
} from 'react-router-dom';
import App from './App';
import App2 from './App2';
import Motivation from './Motivation';
import './index.css';

const route = createBrowserRouter(
	[
		{ path: '/', element: <App /> },
		{ path: '/personal', element: <App2 /> },
		{
			path: '/motivation/:target',
			element: <Motivation />,
			loader: ({ params }) => params.target,
		},
		{
			path: '/*',
			loader: () => redirect('/'),
		},
	],
	{ basename: '/portfolio' }
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={route} />
	</React.StrictMode>
);
