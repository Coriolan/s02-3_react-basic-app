import './App.css';
import Welcome from './Welcome';
import Message from './Message';
import Clock from './Clock';
import ToggleButton from './ToggleButton';
import Greeting from './Greeting';
import LoginControl from './LoginControl';

function App() {
  return (
    <div>
      {/* <Welcome name="John" />
      <Message message="React is great!" />
      <Clock />
      <ToggleButton />
      <Greeting isLoggedIn /> */}
      <LoginControl/>
    </div>
  );
}

export default App;
