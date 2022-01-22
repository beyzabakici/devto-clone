import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
reportWebVitals();
