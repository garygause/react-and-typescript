import React from 'react';
import ReactDom from 'react-dom/client';

const root = ReactDom.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  return (
    <div>
      <h1>cello</h1>
    </div>
  );
};

root.render(<App />);
