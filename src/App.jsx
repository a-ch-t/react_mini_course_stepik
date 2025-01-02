import Greeting from "./components/Greeting";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <UserProfile name="Alice" age="34" />
      <UserProfile name="Bob" age="43" />
    </div>
  );
}

export default App;
