// components/VideoBackground.tsx

import React from 'react';

interface VideoBackgroundProps {
  videoUrl: string; // Prop para la URL del video
  title:string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoUrl,title }) => {
  return (
    <div className="absolute inset-0">
      <video
        autoPlay
        loop
        muted
      >
        <source src={videoUrl} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

    </div>
  );
};

export default VideoBackground;