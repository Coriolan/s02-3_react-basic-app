import './App.css';
import Welcome from './Welcome';
import Message from './Message';
import Clock from './Clock';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div>
      <Welcome name="John" />
      <Message message="React is great!" />
      <Clock />
      <ToggleButton />
    </div>
  );
}

export default App;
