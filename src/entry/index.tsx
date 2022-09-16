import { createRoot } from 'react-dom/client';
import { Entry } from '../components/app/Entry';
import './global.scss';

if (isLocalEnvironment) {
  require('../mocks');
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Entry />);
