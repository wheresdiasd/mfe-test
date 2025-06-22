import * as ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import StorefrontHeader from './storefront-header';

export function App() {
  return (
    <div>
      <StorefrontHeader/>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
