import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

const PostsList = () => {
  //상태 추가
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [modalIsVisble, setModalIsVisble] = useState(true);
  //함수
  //바디값 불러오기
  const bodyChangeHandler = (e) => {
    setEnteredBody(e.target.value);
  };
  //이름값 불러오기
  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const hideModalHandler = () => {
    setModalIsVisble(false);
  };

  return (
    <>
      {/* 조건부랜더링 &&를 쓰면 참일때 코드 실행 아니면 null */}
      {modalIsVisble && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onNameChange={nameChangeHandler}
          />
        </Modal>
      )}

      <div className={classes.posts}>
        <Post author={enteredName} body={enteredBody} />
        <Post author="2번 제목" body="2번 내용" />
      </div>
    </>
  );
};

export default PostsList;

//onClose 함수를 사용해서 자식요소에게 hideModalHandler 함수를  전달함
