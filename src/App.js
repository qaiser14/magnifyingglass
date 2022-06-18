import React from 'react'
import './App.css';
// import ReactImageMagnify from 'react';
// import img from './image.jpg'
import {
  Magnifier,
  GlassMagnifier,
  MagnifierContainer,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
  MagnifierPreview,
  MagnifierZoom
} from "@africasokoni/react-image-magnifiers";
import img from './a.jpg'

function App() {
  return (
    <div className="App">
    <MagnifierContainer>
      <div className="example-class" style={{width:"200px"}}>
        <MagnifierPreview imageSrc={img} />
      </div>
        <MagnifierZoom style={{ height: "400px",width:"400px",marginLeft:"300px" }} imageSrc={img}/>
    </MagnifierContainer>

    </div>
  );
}

export default App;
