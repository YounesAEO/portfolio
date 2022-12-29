import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createHashRouter,
	RouterProvider,
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import App from './App';
import App2 from './App2';
import Motivation from './Motivation';
import './index.css';

const route = createBrowserRouter(
	[
		{ path: '/portfolio', element: <App /> },
		{ path: '/personal', element: <App2 /> },
		{
			path: '/motivation/:target',
			element: <Motivation />,
			loader: ({ params }) => params.target,
		},
		{
			path: '/*',
			element: (
				<div id="error-page" className="container container-motivation">
					<h1>Oops!</h1>
					<p>Seems like you're on the wrong page</p>
					<Link to={'/portfolio'}>
						<p>Go to portfolio</p>
					</Link>
				</div>
			),
		},
	],
	{ basename: '/portfolio' }
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={route} />
	</React.StrictMode>
);
