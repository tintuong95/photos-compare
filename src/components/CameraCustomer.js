import React from "react";
import { useState } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import {Button} from "antd"

const CameraCutomer =(props)=>{
  const [visible,setVisible]=useState(true)

  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
    props.cb(dataUri)
    setVisible(true)
  }
  return <>
   <div className="fixed top-0 left-0  z-40">
    {!visible && <Camera
    
    isImageMirror = {false}
    isSilentMode = {false}
    isDisplayStartCameraError = {true}
    sizeFactor = {1}
    isFullscreen = {true}
    imageType = {IMAGE_TYPES.JPG}
    idealFacingMode = {FACING_MODES.ENVIRONMENT||FACING_MODES.USER}
   onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
 />}
  </div>
  <Button  onClick={()=>{setVisible(false)}}>Camera </Button></>
}

export default CameraCutomer