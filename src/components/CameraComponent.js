import React from 'react';
import WebcamCapture from './WebCameraComponent';

export default class CameraComponent extends React.Component {
    render() {
      return(
        <main>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Camera Component</h1>
              </div>
            </div>
            <WebcamCapture />
          </div>
        </main>
      )
    }
  }
