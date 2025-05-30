import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {DIProvider} from "./contexts/DIContext.js";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DIProvider settings={{}}>
      <App/>
    </DIProvider>
  </StrictMode>,
)
