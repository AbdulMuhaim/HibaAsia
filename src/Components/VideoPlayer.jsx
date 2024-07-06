import React, { useState, useRef } from 'react';
import video from "../assets/132778853_778113649719337_6473248478797310844_n.mp4";
import headerImage from "../assets/smiling Doctor.jpg";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="relative w-2/5 max-w-xl">
        {!isPlaying ? (
          <>
            <img
              src={headerImage}
              alt="Video Thumbnail"
              className="w-full"
            />
            <button
              onClick={handlePlay}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-6 cursor-pointer"
            >
              <span className="text-3xl">▶</span>
            </button>
          </>
        ) : (
          <video
            ref={videoRef}
            className="w-full"
            controls
            autoPlay
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
