import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import photo1 from './image/photo1.jpg';
import photo2 from './image/photo2.jpg';
import photo3 from './image/photo3.jpg';
import photo4 from './image/photo4.jpg';
import './style/index.css';

function App() {
  let galleryArray = [
    {
      id: 'photo1',
      url: photo1,
      text: 'Witness the big 5'
    },
    {
      id: 'photo2',
      url: photo2,
      text: 'Amaizing and affordable campsites'
    },
    {
      id: 'photo3',
      url: photo3,
      text: 'Breath-taking views'
    },
    {
      id: 'photo4',
      url: photo4,
      text: 'Wide range of wildlife'
    }
  ]

  return (
    <>
      <Header />
      <Banner />
      <Gallery gallery={galleryArray}/>
      <Footer />
    </>
  );
}

export default App;
