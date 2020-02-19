import React from 'react';

function hasGetUserMedia() {
    return !!(navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia);
  }

export default class CameraComponent extends React.Component {
    componentDidMount() {
      
      if (hasGetUserMedia()) {
        // Good to go!
      } else {
        alert('getUserMedia() is not supported by your browser');
      }
  
      const constraints = {
        video: true
      };
      
      const video = document.querySelector('video');
      
      navigator.mediaDevices.getUserMedia(constraints).
        then((stream) => {video.srcObject = stream});
    }
  
    render() {
      return(
        <main>
          <h1>Switched</h1>
          <video autoPlay></video>
        </main>
      )
    }
  }
