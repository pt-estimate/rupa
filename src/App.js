import logo from './logo.svg';
import './App.css';

function Task({ name, isComplete }) {
  if (isComplete) {
  return <li className="task">{name} ✔</li>;
  }
  return <li className="task">{name}</li>;
}

function SignUpButton() {
  return (
    <button className="rectangle">
      Sign Up
    </button>
  );
}  


export default function App() {
  return (
    <section>
      <h1>MVP Project Task List</h1>
      <ul>
        <Task
          isComplete={true}
          name="Leverage AWS Amplify to Serve Initial Splash Page"
        />
        <Task
          isComplete={false}
          name="Route to Correct Domain"
        />
        Task
          isComplete={false}
          name="Design Sign-up Flow"
        />
      </ul>
    </section>
  );
)"


      <SignUpButton />
      </header>
    </div>
  );
}

export default App;
