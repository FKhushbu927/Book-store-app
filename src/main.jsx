import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Books from './components/Books';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
    
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'header',
        // element: <About></About>,
        element: <Header></Header>,
      },
      {
        path: 'books',
        element: <Books/>,
      },
    ],

  },
  {
    path: 'about',
    element: <About></About>,

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
