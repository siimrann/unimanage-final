'use client';

import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useEffect, useRef, useState } from 'react';
import { FaCompress, FaExpand, FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

interface ModernVideoPlayer {
  videoSrc:any
}

export default function ModernVideoPlayer({videoSrc}:ModernVideoPlayer) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Play/Pause functionality
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update progress as video plays
  const handleProgress = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  // Handle seeking
  const handleSeek = (value: number) => {
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      if (!isNaN(duration) && isFinite(duration)) {
        const newTime = (value / 100) * duration;
        videoRef.current.currentTime = newTime;
        setProgress(value);
      }
    }
  };

  // Mute/Unmute functionality
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Volume change handler
  const handleVolumeChange = (value: number) => {
    if (videoRef.current) {
      videoRef.current.volume = value;
      setVolume(value);
    }
  };

  // Toggle fullscreen functionality
  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        videoRef.current.requestFullscreen().catch((error) => console.error("Error entering fullscreen: ", error));
      } else {
        document.exitFullscreen().catch((error) => console.error("Error exiting fullscreen: ", error));
      }
    }
  };

  // Handle fullscreen change
  const handleFullscreenChange = () => {
    setIsFullscreen(!!document.fullscreenElement);
  };

  // Add event listener for fullscreen change
  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 flex flex-col items-center justify-center ">
      {/* Big Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center m-12">
        Make your experience better with us.
      </h1>

      {/* Video Container with scaling for larger screens */}
      <div className="relative w-full max-w-3xl mt-4 transform scale-100 md:scale-125"> {/* Scale to 1.25x on medium and larger screens */}
        <div className="overflow-hidden bg-white rounded-lg shadow-lg">
          <video
            ref={videoRef}
            onTimeUpdate={handleProgress}
            className="w-full h-auto" // Keep height auto to maintain aspect ratio
            src="/videos/sample-video.mp4" // Replace with your actual video source
            controls={false} // Use custom controls
          />
        </div>

        {/* Custom Video Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-white text-gray-500 p-4 flex items-center justify-between w-full shadow-md">
          {/* Play/Pause Button */}
          <Button variant="ghost" size="sm" onClick={togglePlayPause}>
            {isPlaying ? <FaPause className="text-xl" /> : <FaPlay className="text-xl" />}
          </Button>

          {/* Progress Bar using custom Slider */}
          <Slider
            className="mx-4 w-full"
            value={[progress]}
            onValueChange={(val) => handleSeek(val[0])}
            max={100}
          />

          {/* Volume Control */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={toggleMute}>
              {isMuted ? <FaVolumeMute className="text-xl" /> : <FaVolumeUp className="text-xl" />}
            </Button>
            <Slider
              className="w-24"
              value={[volume]}
              onValueChange={(val) => handleVolumeChange(val[0])}
              max={1}
              step={0.01}
            />
          </div>

          {/* Fullscreen Toggle */}
          <Button variant="ghost" size="sm" onClick={toggleFullscreen}>
            {isFullscreen ? <FaCompress className="text-xl" /> : <FaExpand className="text-xl" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
