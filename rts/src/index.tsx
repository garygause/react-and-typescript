import ReactDom from 'react-dom/client';
import GuestList from './state/GuestList';

const root = ReactDom.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  return (
    <div>
      <GuestList />
    </div>
  );
};

root.render(<App />);
