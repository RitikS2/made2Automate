import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  
  Link,
} from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>

);

reportWebVitals();
