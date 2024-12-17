// "use client";

// import React, { useRef, useState } from "react";
// import {
//   Play,
//   Pause,
//   Volume2,
//   VolumeX,
//   RotateCw,
//   Maximize2,
//   Minimize2,
// } from "lucide-react";
// import { Slider } from "@/components/ui/slider";

// export default function Player({ src, type = "video" }) {
//   const playerRef = useRef(null);
//   const playerContainerRef = useRef(null);

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [volume, setVolume] = useState(50);
//   const [isMuted, setIsMuted] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   // Воспроизведение/пауза
//   const togglePlay = () => {
//     if (playerRef.current.paused) {
//       playerRef.current.play();
//       setIsPlaying(true);
//     } else {
//       playerRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   // Обновление прогресса
//   const handleProgress = () => {
//     const currentTime = playerRef.current.currentTime;
//     const duration = playerRef.current.duration;
//     setProgress((currentTime / duration) * 100);
//   };

//   // Перемотка
//   const handleSeek = (value) => {
//     playerRef.current.currentTime = (playerRef.current.duration * value) / 100;
//     setProgress(value);
//   };

//   // Управление звуком
//   const toggleMute = () => {
//     playerRef.current.muted = !isMuted;
//     setIsMuted(!isMuted);
//   };

//   const handleVolume = (value) => {
//     setVolume(value);
//     playerRef.current.volume = value / 100;
//     setIsMuted(value === 0);
//   };

//   // Полноэкранный режим
//   const toggleFullscreen = () => {
//     if (!isFullscreen) {
//       if (playerContainerRef.current.requestFullscreen) {
//         playerContainerRef.current.requestFullscreen();
//       }
//       setIsFullscreen(true);
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//       }
//       setIsFullscreen(false);
//     }
//   };

//   return (
//     <div
//       ref={playerContainerRef}
//       className="w-full mx-auto rounded-lg overflow-hidden shadow-lg"
//     >
//       <video
//         ref={playerRef}
//         src={src}
//         onTimeUpdate={handleProgress}
//         className="w-full h-auto bg-black"
//       >
//         <div className="flex items-center justify-between p-4 bg-transparent">
//           <button onClick={togglePlay} className="p-2 hover:opacity-75">
//             {isPlaying ? <Pause size={20} /> : <Play size={20} />}
//           </button>

//           <div className="flex-1 mx-4">
//             <Slider
//               value={[progress]}
//               max={100}
//               step={1}
//               onValueChange={(value) => handleSeek(value[0])}
//               className="text-blue-300"
//             />
//           </div>

//           <button onClick={toggleMute} className="p-2 hover:opacity-75">
//             {isMuted || volume === 0 ? (
//               <VolumeX size={20} />
//             ) : (
//               <Volume2 size={20} />
//             )}
//           </button>
//           <div className="w-20 mx-2">
//             <Slider
//               value={[volume]}
//               max={100}
//               step={1}
//               onValueChange={(value) => handleVolume(value[0])}
//               className="text-blue-300"
//             />
//           </div>

//           <button onClick={toggleFullscreen} className="p-2 hover:opacity-75">
//             {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
//           </button>

//           <button
//             onClick={() => {
//               playerRef.current.currentTime = 0;
//               setProgress(0);
//             }}
//             className="p-2 hover:opacity-75"
//           >
//             <RotateCw size={20} />
//           </button>
//         </div>
//       </video>

//       {/* <div className="flex items-center justify-between p-4 bg-transparent">
//         <button onClick={togglePlay} className="p-2 hover:opacity-75">
//           {isPlaying ? <Pause size={20} /> : <Play size={20} />}
//         </button>

//         <div className="flex-1 mx-4">
//           <Slider
//             value={[progress]}
//             max={100}
//             step={1}
//             onValueChange={(value) => handleSeek(value[0])}
//             className="text-blue-300"
//           />
//         </div>

//         <button onClick={toggleMute} className="p-2 hover:opacity-75">
//           {isMuted || volume === 0 ? (
//             <VolumeX size={20} />
//           ) : (
//             <Volume2 size={20} />
//           )}
//         </button>
//         <div className="w-20 mx-2">
//           <Slider
//             value={[volume]}
//             max={100}
//             step={1}
//             onValueChange={(value) => handleVolume(value[0])}
//             className="text-blue-300"
//           />
//         </div>

//         <button onClick={toggleFullscreen} className="p-2 hover:opacity-75">
//           {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
//         </button>

//         <button
//           onClick={() => {
//             playerRef.current.currentTime = 0;
//             setProgress(0);
//           }}
//           className="p-2 hover:opacity-75"
//         >
//           <RotateCw size={20} />
//         </button>
//       </div> */}
//     </div>
//   );
// }

"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCw,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";

export default function Player({ src, type = "video" }) {
  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  let hideControlsTimeout;

  // Play/Pause
  const togglePlay = () => {
    if (playerRef.current.paused) {
      playerRef.current.play();
      setIsPlaying(true);
    } else {
      playerRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Update progress
  const handleProgress = () => {
    const currentTime = playerRef.current.currentTime;
    const duration = playerRef.current.duration;
    setProgress((currentTime / duration) * 100);
  };

  // Seek
  const handleSeek = (value) => {
    playerRef.current.currentTime = (playerRef.current.duration * value) / 100;
    setProgress(value);
  };

  // Volume
  const toggleMute = () => {
    playerRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolume = (value) => {
    setVolume(value);
    playerRef.current.volume = value / 100;
    setIsMuted(value === 0);
  };

  // Fullscreen
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (playerContainerRef.current.requestFullscreen) {
        playerContainerRef.current.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  // Show/Hide controls
  const handleMouseMove = () => {
    setShowControls(true);
    clearTimeout(hideControlsTimeout);
    hideControlsTimeout = setTimeout(() => setShowControls(false), 3000);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={playerContainerRef}
      className="relative w-full mx-auto rounded-lg overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {type === "video" ? (
        <video
          ref={playerRef}
          src={src}
          onTimeUpdate={handleProgress}
          className="w-full h-auto"
        />
      ) : (
        <audio ref={playerRef} src={src} onTimeUpdate={handleProgress} />
      )}

      {/* Controls */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 text-white transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center space-x-4">
          {/* Play/Pause */}
          <button onClick={togglePlay}>
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>

          {/* Progress */}
          <Slider
            value={[progress]}
            max={100}
            step={1}
            onValueChange={(value) => handleSeek(value[0])}
            className="flex-1 "
          />

          {/* Volume */}
          <button onClick={toggleMute}>
            {isMuted || volume === 0 ? (
              <VolumeX size={20} />
            ) : (
              <Volume2 size={20} />
            )}
          </button>
          <Slider
            value={[volume]}
            max={100}
            step={1}
            onValueChange={(value) => handleVolume(value[0])}
            className="w-24"
          />

          {/* Fullscreen */}
          <button onClick={toggleFullscreen}>
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </button>

          {/* Restart */}
          <button
            onClick={() => {
              playerRef.current.currentTime = 0;
              setProgress(0);
            }}
          >
            <RotateCw size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
