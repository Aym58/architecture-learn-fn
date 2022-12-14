import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { QueryClient, QueryClientProvider } from 'react-query';

import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container!);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);

reportWebVitals();
