import{Security} from '@okta/okta-react'
import oktaAuth from './services/oktaConfig.js'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { toRelativeUrl } from "@okta/okta-auth-js";

const restoreOriginalUri = async (_oktaAuth, originalUri) => {
  window.location.replace(
    toRelativeUrl(originalUri || "/", window.location.origin)
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Security 
    oktaAuth={oktaAuth}
    restoreOriginalUri={restoreOriginalUri}
    >
    <App />
    </Security>
  </StrictMode>,
)

