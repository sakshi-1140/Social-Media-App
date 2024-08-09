import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {RouterProvider} from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom';
import FormComponent from './component/FormComponent';
import PostList from './component/PostList';
import Profile from './component/profile';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/home',
    element: <Profile />,
    children: [
      { path: '', element: <PostList /> },
      { path: 'create-post', element: <FormComponent /> }
    ]
  }
], {
  basename: "/Social-Media-App" // Add the basename here
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = {router}/>  
);

