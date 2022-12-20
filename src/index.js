import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root, { loader as rootLoader } from './pages/Root';
import Entry from './pages/Entry';
import About from './pages/About';
import { createHashRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    loader: rootLoader,
  },
  {
    path: "entries/:entryId",
    element: <Entry/>,
  },
  {
    path: "about",
    element: <About />
  }
], {
  basename: '/'
});

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
