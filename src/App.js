import './App.css';
import React from "react";
import Webcam from "react-webcam";
function App() {

    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);


  return (
    <div className="App">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"/>

        <div className="container">
            <button className="centered-button" onClick={capture}>Shot</button>
             {/*{imgSrc && (
                <img
                    src={imgSrc}
                />
            )}*/}
            <p> {imgSrc} </p>
        </div>
    </div>);

}

// Crear boton que cuando se haga click, hacer la foto
// Convertir la foto a bas64 y obtener el tipo de fichero
// Enviar la imagen al backend
//Hacer una consulta rest a un servidor (backend)


export default App;
