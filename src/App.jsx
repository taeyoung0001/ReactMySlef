import { useState } from "react";
import "./App.css";
import PostList from "./components/PostList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <PostList />
    </main>
  );
}

export default App;
