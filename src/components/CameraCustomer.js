import React from "react";
import { useState } from "react";
import Camera from 'react-html5-camera-photo';
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
    
      
    isFullscreen = {true}
   onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
 />}
  </div>
  <Button  onClick={()=>{setVisible(false)}}>Camera </Button></>
}

export default CameraCutomer