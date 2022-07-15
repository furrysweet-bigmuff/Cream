import React from 'react'
import { createRoot } from 'react-dom/client';
// import './style/reset.min.css'
import './style/main.sass'
import App from './App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
