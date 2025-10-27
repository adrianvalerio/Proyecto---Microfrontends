// movies/src/bootstrap.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import Movies from './Movies';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Movies />);
