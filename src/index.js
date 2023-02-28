import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './store/auth-context';
import './index.css';
import App from './App';
import CartProvider from './store/CartProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CartProvider>
  <AuthContextProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthContextProvider>
 </CartProvider>
  
);
