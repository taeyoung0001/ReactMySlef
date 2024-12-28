import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";

const NewPost = ({ onAddpost }) => {
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
      <Modal>
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
            <Link to={".."} type="button">
              Cancel
            </Link>
            <button>Submit</button>
          </p>
        </form>
      </Modal>
    </div>
  );
};

export default NewPost;
