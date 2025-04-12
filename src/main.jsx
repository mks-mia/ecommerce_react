// ✅ Import the core React library (needed to write React components and JSX)
import React from 'react';

// ✅ Import ReactDOM's new root API (used to render your React app into the HTML DOM)
import ReactDOM from 'react-dom/client';

// ✅ Import the main App component — this is the root of your UI
import App from './App.jsx';

// ✅ Import your global CSS styles (for the entire app)
import './index.css';

// ✅ Import the Provider component from react-redux — it makes the Redux store available to the app
import { Provider } from 'react-redux';

import store from './store.js';

// ✅ Create the root of your React app and render it inside the #root div in index.html
// ✅ Wrap <App /> in <Provider store={store}> so all components can access the Redux store
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);