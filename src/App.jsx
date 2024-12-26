import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Post from "./components/Post";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Post author="hi" body="1번입니다." />
      <Post author="2번제목" body="2번 바디입니다." />
      <Post />
      <Post />
    </main>
  );
}

export default App;
