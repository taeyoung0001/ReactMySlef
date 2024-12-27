import classes from "./NewPost.module.css";

const NewPost = (props) => {
  return (
    <div>
      <form className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            name=""
            id="body"
            required
            rows={3}
            onChange={props.onBodyChange}
          ></textarea>
        </p>

        <p>
          <label htmlFor="name">Text</label>
          <textarea
            type="text"
            id="name"
            required
            onChange={props.onNameChange}
          ></textarea>
        </p>
      </form>
    </div>
  );
};

export default NewPost;
