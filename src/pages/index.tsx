import { useEffect } from 'react';

import DrawingToolBar from './toolbar';

import useCanvas from '../hook/useCanvas'

function DrawingAppWrapper() {
  const {
    refCanvas,
    _clearCanvas
  } = useCanvas();

  // useEffect(()=>{
  //   const canvas = new fabric.Canvas("fabric_canvas", {isDrawingMode:true});
  //   canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
  //   canvas.freeDrawingBrush.width = 15;
  //   canvas.isDrawingMode = true;
  // }, [])

  return(
  <div>
    <p>드로잉 테스트 앱 !!</p>
    <canvas width="1500" height="1000" ref={refCanvas}></canvas>
    <DrawingToolBar />
  </div>
  )
}

export default DrawingAppWrapper;