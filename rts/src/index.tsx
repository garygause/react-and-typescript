import ReactDom from 'react-dom/client';
import UserSearch from './state/UserSearch';

const root = ReactDom.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

root.render(<App />);
