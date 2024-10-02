import Navbar from "./component/Navbar"
import HeroSection from "./component/HeroSection"
import SongCarousel from "./component/SongCarousel";
import AlbumCarousel from "./component/AlbumCarousel";
import Chatbot from "./component/Chatbot";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SongCarousel />
      <AlbumCarousel />
      {/* <Chatbot /> */}
    </>
  )
}