import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

const PostsList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);
  const addPostsHandler = (postData) => {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };
  return (
    <>
      {/* 조건부랜더링 &&를 쓰면 참일때 코드 실행 아니면 null */}
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddpost={addPostsHandler} />
        </Modal>
      )}

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
