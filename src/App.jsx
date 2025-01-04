import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div>
      <UserInfo isAdmin={true} />
      <UserInfo isAdmin={false} />
    </div>
  );
}

export default App;
