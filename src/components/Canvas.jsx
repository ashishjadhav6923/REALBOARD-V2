import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import * as fabric from "fabric";
import { useCanvas } from "../context/CanvasContext";

const Canvas = () => {
  let { fabricCanvasRef } = useCanvas();
  const canvasRef = useRef(null);
  const canvasColor = useSelector((state) => state.canvasColor.color);
  const toolbarHeight = useSelector((state) => state.toolbar.height);
  useEffect(() => {
    const fabricCanvas = new fabric.Canvas(canvasRef.current, {
      height: window.innerHeight - toolbarHeight,
      width: window.innerWidth,
      isDrawingMode: true,
      backgroundColor: canvasColor,
    });
    fabricCanvas.renderAll();
    fabricCanvasRef.current = fabricCanvas;
    return () => {
      fabricCanvas.dispose();
      fabricCanvasRef.current = null;
    };
  }, [toolbarHeight]);

  useEffect(() => {
    if (fabricCanvasRef.current) {
      fabricCanvasRef.current.backgroundColor = canvasColor;
      fabricCanvasRef.current.renderAll();
    }
  }, [canvasColor]);
  return <canvas ref={canvasRef}></canvas>;
};

export default Canvas;
