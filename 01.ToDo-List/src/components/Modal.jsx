import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

const Modal = ({ children }) => {
  const navigator = useNavigate();
  const closeHandeler = () => {
    navigator("..");
  };
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandeler} />
      <dialog open={true} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;

// open 이라는 친구를 사용하여서 모달창을 열거임children을 감싸줌
// 문서화
// 1. useState로 상태를 등록하고
// 2. 백드롭에 이벤트 리스너
// 3. 등록한 상태를 사용해서 open 조작작
