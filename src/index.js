import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import Error from './components/Error';

const error = <Error description="Something went wrong!" title="Error" />;

render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary fallback={error}>
        <App />
      </ErrorBoundary>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

serviceWorkerRegistration.register();

// eslint-disable-next-line no-console
reportWebVitals(console.log);
