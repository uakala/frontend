import './App.css';
import React from "react";
import Webcam from "react-webcam";

function App() {

    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc)
        fetch('https://rp7macpvyl.execute-api.us-east-1.amazonaws.com/dev/api/gpt/upload-image', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({image : imageSrc})
        }).then(() => {
            console.log('imagen subida')
        })
    }, [webcamRef, setImgSrc]);

  return (
    <div className="App">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"/>

        <div className="container">
            <button className="centered-button" onClick={capture}>Shot</button>
            <p> {imgSrc} </p>
        </div>
    </div>);


}

export default App;
