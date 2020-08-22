import React from 'react';
import { render } from 'react-dom';

import './styles/global.css';

import Home from '@components/Home';

const rootAppContainer = document.createElement('div');
rootAppContainer.setAttribute('id', 'root');

document.body.appendChild(rootAppContainer);

const App: React.FC = () => {
  return <Home />
};


render(<App />, rootAppContainer);