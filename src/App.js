import { React, useState } from 'react';
import './App.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import ReactTypingEffect from 'react-typing-effect';
import Faq from "react-faq-component";

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

const faq_data = {
  title: "I am a FAQ npm package! ",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

function App() {
  const [count, setCount] = useState(0);
  const headerMessages = ['Welcome to Workshop 3', 'Coders SB Shirts are out!', 'Hello world!'];

  const faq_styles = {
    /* fill me in for practice! */
  };

  const faq_config = {
    /* fill me in for practice! */
  };

  return (
    <div>
      <h1>
        <ReactTypingEffect
          text={headerMessages}
          speed={25}
          eraseSpeed={100}
        />
      </h1>
      <ImageGallery items={images} showThumbnails={false} autoPlay={true} slideInterval={5000} onSlide={() => setCount(count + 1)} />

      <h1> # image switches: {count} </h1>

      <Faq
        data={faq_data}
        styles={faq_styles}
        config={faq_config}
      />

    </div>
  );
}

export default App;
