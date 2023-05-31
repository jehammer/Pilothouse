import { createRoot } from 'react-dom/client';
import Nav from './nav';
import '../css/app.css';

const root = createRoot(document.getElementById('root'));
root.render(<Nav />);