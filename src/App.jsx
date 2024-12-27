import { useState } from "react";

import "./App.css";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisble, setModalIsVisble] = useState(true);

  const showModalHandler = () => {
    setModalIsVisble(true);
  };

  const hideModalHandler = () => {
    setModalIsVisble(false);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isPosting={modalIsVisble} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
