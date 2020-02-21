import React from 'react';
import WebCameraComponent from './WebCameraComponent';

export default class CameraComponent extends React.Component {
    render() {
      return(
        <main>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Camera Component</h1>
                <WebCameraComponent 
                  width="100%"
                />
              </div>
            </div>
          </div>
        </main>
      )
    }
  }
