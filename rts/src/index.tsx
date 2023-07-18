import ReactDom from 'react-dom/client';
import EventComponent from './state/EventComponent';

const root = ReactDom.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  return (
    <div>
      <EventComponent />
    </div>
  );
};

root.render(<App />);
