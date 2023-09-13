import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { ProductsProvider } from './contexts/product-context';
import { CartProvider } from './contexts/cart-context';
import GlobalStyle from './commons/style/global-style';

import { theme } from '../src/commons/style/theme';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </ThemeProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
