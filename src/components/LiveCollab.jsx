import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { useCanvas } from "../context/CanvasContext";
import { useSelector } from "react-redux";

// const socket = io(import.meta.env.VITE_BACKEND_URI); // Change to your backend URL

const LiveCollab = () => {
  const themeColor = useSelector((state) => state.theme.themeColor);
  let { fabricCanvasRef } = useCanvas();
  const [roomId, setRoomId] = useState("");

  

  // Join a room
  const joinRoom = () => {
  };

  return (
    <div className={`z-50 absolute top-28 right-2 border-slate-200 border-1 shadow-md rounded-xl flex flex-col justify-between items-center gap-2 p-2 ${
      themeColor == "light"
        ? "bg-white border-slate-200 border-1 "
        : "bg-[#232329] text-white"
    }`}>
      <input
        className="border-1 border-slate-300 rounded-xl p-1"
        type="text"
        placeholder="Enter Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button
        className={`select-none rounded-xl cursor-pointer shadow-sm text-md py-2 px-3 h-fit w-fit border-slate-200 border-1 ${
          themeColor == "light"
            ? "bg-gray-100 border-slate-300 border-1 hover:border-blue-500"
            : "bg-[#232329] text-white hover:border-1 hover:border-blue-500"
        }`}
        onClick={joinRoom}
      >
        Join Room
      </button>
    </div>
  );
};
export default LiveCollab;
