

import useTool from '../hook/useTool'

import { drawingStore } from "../stores/index";
import shallow from 'zustand/shallow';

import Button from '@mui/material/Button';
import { useEffect } from 'react';

function DrawingToolBar() {
  const [fabricCanvas, currentTOOL, setCurrentTOOL] = drawingStore(state =>[state.fabricCanvas, state.currentTOOL, state.setCurrentTOOL], shallow);
  // if(!canvas) return;

  // const {
  //   _changeAction
  // } = useTool();
  useTool();
  // useEffect(()=>{
  //   console.log("!!캔버스!!", fabricCanvas)
  //   const canvas2 = fabricCanvas;
  // }, [fabricCanvas])

  // useEffect(()=>{console.log("여기만적용?")}, [currentTOOL])

  return(
    <div>
      <p>툴바 !!</p>
      <Button variant="contained" onClick={()=>{setCurrentTOOL('select')}}>선택</Button>
      <Button variant="contained" onClick={()=>{setCurrentTOOL('brush')}}>브러시</Button>
    </div>
  )
}

export default DrawingToolBar;


// let erasingRemovesErasedObjects = false;
// function changeAction(target) {
//     ['select','erase','undo','draw','spray'].forEach(action => {
//       const t = document.getElementById(action);
//       t.classList.remove('active');
//     });
//   if(typeof target==='string') target = document.getElementById(target);
//     target.classList.add('active');
//     switch (target.id) {
//       case "select":
//         canvas.isDrawingMode = false;
//         break;
//       case "erase":
//         canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
//         canvas.freeDrawingBrush.width = 10;
//         canvas.isDrawingMode = true;
//         break;
//       case "undo":
//         canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
//         canvas.freeDrawingBrush.width = 10;
//         canvas.freeDrawingBrush.inverted = true;
//         canvas.isDrawingMode = true;
//         break;
//       case "draw":
//         canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
//         canvas.freeDrawingBrush.width = 35;
//         canvas.isDrawingMode = true;
//         break;
//       case "spray":
//         canvas.freeDrawingBrush = new fabric.SprayBrush(canvas);
//         canvas.freeDrawingBrush.width = 35;
//         canvas.isDrawingMode = true;
//         break;
//       default:
//         break;
//     }
//   }
//   function init() {
//     canvas.setOverlayColor("rgba(0,0,255,0.4)",undefined,{erasable:false});
//   }

//   const setDrawableErasableProp = (drawable, value) => {
//     canvas.get(drawable)?.set({ erasable: value });
//     changeAction('erase');
//   };

//   const setBgImageErasableProp = (input) =>
//     setDrawableErasableProp("backgroundImage", input.checked);

//   const setErasingRemovesErasedObjects = (input) =>
//     (erasingRemovesErasedObjects = input.checked);

//   const downloadImage = () => {
//     const ext = "png";
//     const base64 = canvas.toDataURL({
//       format: ext,
//       enableRetinaScaling: true
//     });
//     const link = document.createElement("a");
//     link.href = base64;
//     link.download = `eraser_example.${ext}`;
//     link.click();
//   };

//   const downloadSVG = () => {
//     const svg = canvas.toSVG();
//     const a = document.createElement("a");
//     const blob = new Blob([svg], { type: "image/svg+xml" });
//     const blobURL = URL.createObjectURL(blob);
//     a.href = blobURL;
//     a.download = "eraser_example.svg";
//     a.click();
//     URL.revokeObjectURL(blobURL);
//   };

//   const toJSON = async () => {
//     const json = canvas.toDatalessJSON(["clipPath", "eraser"]);
//     const out = JSON.stringify(json, null, "\t");
//     const blob = new Blob([out], { type: "text/plain" });
//     const clipboardItemData = { [blob.type]: blob };
//     try {
//       navigator.clipboard &&
//         (await navigator.clipboard.write([
//           new ClipboardItem(clipboardItemData)
//         ]));
//     } catch (error) {
//       console.log(error);
//     }
//     const blobURL = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = blobURL;
//     a.download = "eraser_example.json";
//     a.click();
//     URL.revokeObjectURL(blobURL);
//   };
//   const canvas = this.__canvas = new fabric.Canvas('c');
//   init();
//   changeAction('erase');
