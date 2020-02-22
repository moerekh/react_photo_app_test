import React, { useCallback, useRef } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
    width: 800,
    height: 600,
    facingMode: "user"
};
   
const WebcamCapture = () => {
  const webcamRef = useRef(null);

  const capture = useCallback(
      () => {
      const imageSrc = webcamRef.current.getScreenshot();
      let photo_frame = document.querySelector('#myimage');
        let photo = document.createElement('img');
        photo.src = imageSrc;
        photo_frame.append(photo);
      },
      [webcamRef]
  );

  return (
    <>
      <div className="row">
        <div className="col">
          <div id="myimage"></div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Webcam
            audio={false}
            height={600}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={800}
            videoConstraints={videoConstraints}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
          <button className="btn btn-primary" onClick={capture}>Capture photo</button>
          </div>
        </div>
    </>
  );
};

export default WebcamCapture;