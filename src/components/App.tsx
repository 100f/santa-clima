import React from 'react';
import { render } from 'react-dom';

const rootAppContainer = document.createElement('div');
rootAppContainer.setAttribute('id', 'root');

const App: React.FC = () => {
  return (
    <div>
      Santa Clima
    </div>
  );
};

render(<App />, rootAppContainer);