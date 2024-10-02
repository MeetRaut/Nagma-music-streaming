// src/components/SongCarousel.js
import React, { useRef, useState } from 'react';
import SongCard from './SongCard';
import SongPlayer from './SongPlayer'; // Import SongPlayer component
import songImage from '../images/song_img.png';
import audio from '../audios/01.mp3';

const SongCarousel = () => {
  const carouselRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(null); // State for the current song

  const songs = [
    { imageUrl: songImage, songName: "Blissful Beats", artistName: "DJ Melody", audioUrl: audio },
    { imageUrl: songImage, songName: "Chill Vibes", artistName: "The Harmonizers", audioUrl: audio },
    { imageUrl: songImage, songName: "Sunny Days", artistName: "Ray Sun", audioUrl: audio },
    { imageUrl: songImage, songName: "Moonlight Serenade", artistName: "Luna Echo", audioUrl: audio },
    { imageUrl: songImage, songName: "Ocean Waves", artistName: "The Tides", audioUrl: audio },
    { imageUrl: songImage, songName: "Midnight Groove", artistName: "Night Owl", audioUrl: audio },
    { imageUrl: songImage, songName: "Dream Catcher", artistName: "Starry Night", audioUrl: audio },
    { imageUrl: songImage, songName: "Golden Hour", artistName: "The Sunset Collective", audioUrl: audio },
    { imageUrl: songImage, songName: "Electric Pulse", artistName: "Neon Spark", audioUrl: audio },
    { imageUrl: songImage, songName: "Calm Waters", artistName: "The Drift", audioUrl: audio }
  ];

  const handlePlay = (song) => {
    setCurrentSong(song); // Set the selected song
  };

  return (
    <div className="my-10 p-4">
      {/* Title and Show More Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Featured Songs</h2>
        <button className="text-purple-600 hover:text-purple-800 font-semibold">
          Show More
        </button>
      </div>

      {/* Carousel Section */}
      <div className="relative">
        {/* Carousel */}
        <div
          className="flex space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory"
          ref={carouselRef}
        >
          {songs.map((song, index) => (
            <div key={index} className="snap-center">
              <SongCard
                imageUrl={song.imageUrl}
                songName={song.songName}
                artistName={song.artistName}
                onPlay={() => handlePlay(song)} // Pass the play handler
              />
            </div>
          ))}
        </div>
      </div>

      {/* Render SongPlayer when a song is selected */}
      {currentSong && <SongPlayer currentSong={currentSong} />}
    </div>
  );
};

export default SongCarousel;