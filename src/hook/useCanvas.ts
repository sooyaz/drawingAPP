import { useEffect, useRef } from "react";

import { drawingStore } from "../stores/index";
import shallow from 'zustand/shallow';

import { fabric } from "fabric";

function useCanvas() {
  const refCanvas = useRef<HTMLCanvasElement>(null);
  const refFabricCanvas = useRef<fabric.Canvas | null>(null);

  const [setFabricCanvas] = drawingStore(state =>[state.setFabricCanvas], shallow);
  
  function _initCanvas() {
    if (!refCanvas.current || refFabricCanvas.current) return;
    
    const canvas = (refFabricCanvas.current = new fabric.Canvas(
      refCanvas.current,
      {
        isDrawingMode: false,
        selection: false,
      }
    ));

    // 캔버스 전역 저장
    setFabricCanvas(refFabricCanvas.current);

    canvas.setWidth(1200);
    canvas.setHeight(800);
    console.log("초기화", refFabricCanvas.current);
  }

  function _clearCanvas() {
    const canvas = refFabricCanvas.current;
    if (!canvas) return;
    canvas.clear();
  }

  useEffect(_initCanvas, []);

  return {
    refCanvas,
    _clearCanvas
  } as const;
}

export default useCanvas;