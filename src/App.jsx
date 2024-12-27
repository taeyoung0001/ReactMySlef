import { useState } from "react";
import "./App.css";
import PostsList from "./components/PostsList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <PostsList />
    </main>
  );
}

export default App;
