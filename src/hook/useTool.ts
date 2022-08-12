import { useEffect } from "react";

import { drawingStore } from "../stores/index";
import shallow from 'zustand/shallow';

import { fabric } from "fabric";

function useTool() {
  const [currentTOOL, fabricCanvas] = drawingStore(state =>[state.currentTOOL, state.fabricCanvas], shallow);

  function _changeAction() {
    if(!fabricCanvas) return;
    console.log("여기들어와야지")
    switch (currentTOOL) {
      case "select":
        fabricCanvas.isDrawingMode = false;
      break;
      case "brush":
        console.log("여기들어와야지222", fabricCanvas)
        fabricCanvas.freeDrawingBrush = new fabric.PencilBrush(fabricCanvas);
        fabricCanvas.freeDrawingBrush.width = 20;
        fabricCanvas.isDrawingMode = true;
      break;
      // case "spray":
      //   canvas.freeDrawingBrush = new fabric.SprayBrush(canvas);
      //   canvas.freeDrawingBrush.width = 35;
      //   canvas.isDrawingMode = true;
      // break;
      // case "erase":
      //   canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
      //   canvas.freeDrawingBrush.width = 10;
      //   canvas.isDrawingMode = true;
      // break;
      // case "undo":
      //   canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
      //   canvas.freeDrawingBrush.width = 10;
      //   canvas.freeDrawingBrush.inverted = true;
      //   canvas.isDrawingMode = true;
      // break;
      default:
      break;
    }
  }

  useEffect(_changeAction, [currentTOOL]);
  
  return {
    _changeAction
  } as const;
}

export default useTool;