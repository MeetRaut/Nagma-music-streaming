// src/components/SongPlayer.js
import React, { useState, useEffect } from 'react';

const SongPlayer = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(currentSong.audioUrl));

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    // Cleanup function to pause the audio when the component unmounts
    return () => {
      audio.pause();
    };
  }, [isPlaying, audio]);

  useEffect(() => {
    // When a new song is selected, play it automatically
    if (currentSong) {
      audio.src = currentSong.audioUrl;
      setIsPlaying(true);
    }
  }, [currentSong, audio]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (!currentSong) return null; // Return null if no song is selected

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg flex items-center justify-between">
      <div className="flex items-center">
        <img src={currentSong.imageUrl} alt={currentSong.songName} className="w-16 h-16 rounded-lg mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{currentSong.songName}</h3>
          <p className="text-gray-600">{currentSong.artistName}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={handlePlayPause}
          className="bg-purple-600 text-white rounded-full p-2 hover:bg-purple-700 transition"
        >
          {isPlaying ? '❚❚' : '▶️'}
        </button>
      </div>
    </div>
  );
};

export default SongPlayer;