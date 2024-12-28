import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <Outlet></Outlet>
      <main>
        <PostsList></PostsList>
      </main>
    </>
  );
}

export default Posts;
