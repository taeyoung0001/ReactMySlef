import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

const PostsList = ({ isPosting, onStopPosting }) => {
  return (
    <>
      {/* 조건부랜더링 &&를 쓰면 참일때 코드 실행 아니면 null */}
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}

      <div className={classes.posts}>
        <Post author="2번 제목" body="2번 내용" />
      </div>
    </>
  );
};

export default PostsList;

//onClose 함수를 사용해서 자식요소에게 hideModalHandler 함수를  전달함

//props 를 바로 쓸때는 { }안에 {{}} 이렇게 해야함
