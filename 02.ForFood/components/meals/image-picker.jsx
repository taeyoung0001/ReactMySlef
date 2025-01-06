"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef();
  const PickerHandler = () => {
    imageInput.current.click();
  };

  //업로드 된 이미지 미리 보이게 하기
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}> {label}</label>
      <div classname={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>이미지가 없습니다.</p>}
          {pickedImage && <Image src={pickedImage} alt="선택한 이미지" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={PickerHandler}
        >
          Pick on Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;

// useRef 훅을 사용할거야
