import logo from './logo.svg';
import './App.css';

function SignUpButton() {
  return (
    <button>
      Sign Up
    </button>
  );
}  


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
         Rupa Health
	</h1>
      <SignUpButton />
      </header>
    </div>
  );
}

export default App;
