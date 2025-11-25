import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from './components/ui/theme-provider.tsx';
import { ModeToggle } from './components/ui/mode-toggle.tsx';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <div className='flex justify-between min-h-screen'>
      <div className='flex-5'>
        <App />
      </div>
      <ModeToggle />
    </div>
  </ThemeProvider>
);
