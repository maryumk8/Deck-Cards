import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

export { default as Container } from 'react-bootstrap/Container';
export { default as Dropdown } from 'react-bootstrap/Dropdown';

export { default as Row } from 'react-bootstrap/Row';

export { default as Col } from 'react-bootstrap/Col';

export { default as Form } from 'react-bootstrap/Form';

export { default as Button } from 'react-bootstrap/Button';

export { default as Modal } from 'react-bootstrap/Modal';

export { default as Navbar } from 'react-bootstrap/Navbar';
export { default as Card } from 'react-bootstrap/Card';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
