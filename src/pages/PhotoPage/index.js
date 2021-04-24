import React from "react";
import Camera from "react-dom-camera";
import { CamreaWrapper } from "./style";
import { useDispatch } from "react-redux";
import { updatePhoto } from "../HomePage/UserSlice";

const PhotoPage = () => {
  const dispatch = useDispatch();
  return (
    <CamreaWrapper>
      <Camera onTakePhoto={(image) => dispatch(updatePhoto(image))} />
    </CamreaWrapper>
  );
};

export default PhotoPage;
