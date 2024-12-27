import Post from "./Post";
import classes from "./PostList.module.css";

const PostList = () => {
  return (
    <div className={classes.postList}>
      <Post author="1번 제목" body="1번 내용" />
      <Post author="2번 제목" body="2번 내용" />
    </div>
  );
};

export default PostList;
