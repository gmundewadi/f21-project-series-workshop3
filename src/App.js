import './App.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from 'react';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1> Our image gallery npm module </h1>
      <ImageGallery items={images} showThumbnails={false} autoPlay={true} slideInterval={5000} onSlide={() => setCount(count + 1)} />
      <h1> Our image gallery has changed images {count} times </h1>
    </div>
  );
}

export default App;
