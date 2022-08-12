import create from 'zustand';
import { TOOL } from '../types/types'

export const drawingStore = create<TOOL>(
  set => ({
    fabricCanvas: null,
    setFabricCanvas(canvas: fabric.Canvas) {
      set(() => ({fabricCanvas: canvas}))
    },

    
    currentTOOL: "select",
    setCurrentTOOL(tool: string) {
      set(() => ({currentTOOL: tool}))
    },
  })
)

// export {
//   drawingStore,
// }