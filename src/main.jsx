import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import AppRouter from './Router';


ReactDom.createRoot(document.getElementById('root')).render(<AppRouter />);

