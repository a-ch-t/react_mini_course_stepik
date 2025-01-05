import Article from "./components/Article";

function App() {
  return (
    <div>
      <Article
        title="JSX Overview"
        content="JSX is a syntax extension for JavaScript."
      />
      <Article
        title="React Components"
        content="React components let you split the UI into independent parts."
      />
    </div>
  );
}

export default App;
