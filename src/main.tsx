import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// @ts-expect-error For some reason it's not recognizing the font
import '@fontsource-variable/noto-sans';
import {HashRouter} from "react-router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HashRouter>
          <App/>
      </HashRouter>
  </StrictMode>,
)
