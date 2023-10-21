import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/style.css';
import { NoteApp } from './components';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NoteApp />
  </StrictMode>
);