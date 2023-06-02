import logo from './logo.svg';
import './App.css';

function Task({ name, isComplete }) {
  return (
    <li className="task">
      {isComplete ? name + " " + <input type="checkbox" />: name}
    </li>
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
        <Task
          isComplete={false}
          name="Design Sign-up Flow"
        />
      </ul>
    </section>
  );
}

export default App;
