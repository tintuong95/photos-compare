import ReactCompareImage from "react-compare-image";
import { useState } from "react";


import CameraCustomer from "./components/CameraCustomer";
function App() {
  const [urlImageFirst, setUrlImageFirst] = useState(
    "https://www.madeireiraestrela.com.br/images/joomlart/demo/default.jpg"
  );
  const [urlImageSecond, setUrlImageSecond] = useState(
    "https://www.madeireiraestrela.com.br/images/joomlart/demo/default.jpg"
  );

  const onUploadPhoto = (e, cb) => {
    const newUrl = URL.createObjectURL(e.target.files[0]);
    cb(newUrl);
  };
  
  
  return (
    <div className="  ">
     
      <div className="grid grid-cols-2 gap-2 my-6 px-10  m-auto">
        <div className="col-span-1 flex gap-2 items-center">
        <CameraCustomer cb={setUrlImageFirst}/>
          <input
            onChange={(event) => {
              onUploadPhoto(event, setUrlImageFirst);
            }}
            type="file"
            multiple={false}
          />
        </div>

        <div className="col-span-1 flex gap-2 items-center">
        <CameraCustomer cb={setUrlImageSecond}/>
          <input
            onChange={(event) => {
              onUploadPhoto(event, setUrlImageSecond);
            }}
            type="file"
          />
        </div>
      </div>
      <div className="px-10 ">
        <ReactCompareImage
          leftImage={urlImageFirst}
          rightImage={urlImageSecond}
        />
      </div>
      ;
    </div>
  );
}

export default App;
