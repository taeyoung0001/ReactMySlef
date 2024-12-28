import { useState } from "react";
import classes from "./NewPost.module.css";

const NewPost = ({ onCancel, onAddpost }) => {
  //상태 추가
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredName, setEnteredName] = useState("");

  //함수
  //바디값 불러오기
  const bodyChangeHandler = (e) => {
    setEnteredBody(e.target.value);
  };

  //이름값 불러오기
  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  //제출 버튼
  const submitHandler = (e) => {
    e.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredName,
    };
    onAddpost(postData);
    onCancel();
  };

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            name=""
            id="body"
            required
            rows={3}
            onChange={bodyChangeHandler}
          ></textarea>
        </p>

        <p>
          <label htmlFor="name">Text</label>
          <textarea
            type="text"
            id="name"
            required
            onChange={nameChangeHandler}
          ></textarea>
        </p>

        <p className={classes.actions}>
          <button onClick={onCancel} type="button">
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </form>
    </div>
  );
};

export default NewPost;
