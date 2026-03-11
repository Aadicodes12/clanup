import React from 'react';

const NewPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <video
          className="w-full h-auto rounded-lg shadow-lg"
          controls
          autoPlay
          loop
          muted
          src="https://www.w3schools.com/html/mov_bbb.mp4" // Placeholder video URL
          typeof="video/mp4"
        >
          Your browser does not support the video tag.
        </video>
        <p className="text-center text-sm text-gray-400 mt-2">
          (Placeholder video - replace `src` with your video URL)
        </p>
      </div>
    </div>
  );
};

export default NewPage;