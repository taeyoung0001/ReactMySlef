import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = () => {
  const posts = useLoaderData();

  // https가 아니라 http임
  // 서버에 저장하기
  const addPostsHandler = (postData) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setPosts((existingPosts) => [postData, ...existingPosts]);
  };

  return (
    <>
      {/* {posts}쓰려면 jsx파일로 변환해야함 */}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length == 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet...</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostsList;

//onClose 함수를 사용해서 자식요소에게 hideModalHandler 함수를  전달함

//props 를 바로 쓸때는 { }안에 {{}} 이렇게 해야함
