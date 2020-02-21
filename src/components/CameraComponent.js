import React from 'react';
import Webcam from "react-webcam";

export default class CameraComponent extends React.Component {
    render() {
      return(
        <main>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Camera Component</h1>
                <Webcam />
              </div>
            </div>
          </div>
        </main>
      )
    }
  }
