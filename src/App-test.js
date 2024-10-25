import logo from './logo.svg';
import './App.css';

function App() {
  function formatName(userName) {
    return userName.toUpperCase();
  }

  function getGreeting(userName) {
    if (userName) {
      return <h1>Hello {formatName(userName)}!</h1>;
    } else {
      return <h1>Hello Stranger</h1>;
    }
  }

  const name = 'John Smith';
  const userImage = '/logo192.png';
  const image = <img src={userImage} alt="logo" />;
  const element = (
    <div>
      <h1>Hello {name}</h1>
      <p>Good to see you</p>
      {image}
    </div>
  );

  return element;
}

export default App;
