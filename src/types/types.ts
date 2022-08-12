export interface TOOL{
    fabricCanvas: fabric.Canvas | null;
    setFabricCanvas : (canvas: fabric.Canvas) => void;

    currentTOOL: string;
    setCurrentTOOL : (tool: string) => void;
}