import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './features/store';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import MoviePage from './pages/MoviePage';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/movies',
    element: <MoviePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

root.render(
  <StrictMode>
    <ColorModeScript />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider theme={theme}>
          <RouterProvider router={router} />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
