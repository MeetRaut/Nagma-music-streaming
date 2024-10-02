import React, { useRef, useState } from 'react';
import SongCard from './SongCard';
import SongPlayer from './SongPlayer';
import songImage from '../images/song_img.png';
import audio1 from '../audios/fun/01.mp3';
import audio2 from '../audios/fun/02.mp3';
import audio3 from '../audios/fun/03.mp3';
import audio4 from '../audios/fun/04.mp3';
import audio5 from '../audios/fun/05.mp3';
import audio6 from '../audios/fun/06.mp3';
import audio7 from '../audios/fun/07.mp3';
import audio8 from '../audios/fun/08.mp3';
import audio9 from '../audios/fun/09.mp3';
import audio10 from '../audios/fun/10.mp3';

const SongCarousel = () => {
  const carouselRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const songs = [
    { imageUrl: songImage, songName: "Blissful Beats", artistName: "DJ Melody", audioUrl: audio1 },
    { imageUrl: songImage, songName: "Chill Vibes", artistName: "The Harmonizers", audioUrl: audio2 },
    { imageUrl: songImage, songName: "Sunny Days", artistName: "Ray Sun", audioUrl: audio3 },
    { imageUrl: songImage, songName: "Moonlight Serenade", artistName: "Luna Echo", audioUrl: audio4 },
    { imageUrl: songImage, songName: "Ocean Waves", artistName: "The Tides", audioUrl: audio5 },
    { imageUrl: songImage, songName: "Midnight Groove", artistName: "Night Owl", audioUrl: audio6 },
    { imageUrl: songImage, songName: "Dream Catcher", artistName: "Starry Night", audioUrl: audio7 },
    { imageUrl: songImage, songName: "Golden Hour", artistName: "The Sunset Collective", audioUrl: audio8 },
    { imageUrl: songImage, songName: "Electric Pulse", artistName: "Neon Spark", audioUrl: audio9 },
    { imageUrl: songImage, songName: "Calm Waters", artistName: "The Drift", audioUrl: audio10 }
  ];

  const handlePlay = (song, index) => {
    setCurrentSong(song);
    setCurrentSongIndex(index);
  };

  const handleNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
    setCurrentSongIndex(nextIndex);
  };

  const handlePreviousSong = () => {
    const previousIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[previousIndex]);
    setCurrentSongIndex(previousIndex);
  };

  return (
    <div className="my-10 p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Featured Songs</h2>
        <button className="text-purple-600 hover:text-purple-800 font-semibold">
          Show More
        </button>
      </div>

      <div className="relative">
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
                onPlay={() => handlePlay(song, index)}
              />
            </div>
          ))}
        </div>
      </div>

      {currentSong && (
        <SongPlayer
          currentSong={currentSong}
          onNextSong={handleNextSong}
          onPreviousSong={handlePreviousSong}
        />
      )}
    </div>
  );
};

export default SongCarousel;