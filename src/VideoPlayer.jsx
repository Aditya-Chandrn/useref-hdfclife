import { useRef } from "react";

export default function VideoPlayer() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleRewind = () => {
    videoRef.current.currentTime -= 5;
  };

  const handleForward = () => {
    videoRef.current.currentTime += 5;
  };

  const handleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-6 min-h-screen">
      <video
        ref={videoRef}
        width="640"
        height="360"
        controls={false}
        className="rounded-lg shadow-lg"
      >
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video>

      <div className="space-x-2">
        <button
          onClick={handlePlay}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Play
        </button>
        <button
          onClick={handlePause}
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
        >
          Pause
        </button>
        <button
          onClick={handleRewind}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Rewind -5s
        </button>
        <button
          onClick={handleForward}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Forward +5s
        </button>
        <button
          onClick={handleFullscreen}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Fullscreen
        </button>
      </div>
    </div>
  );
}
