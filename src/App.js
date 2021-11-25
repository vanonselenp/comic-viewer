import './App.css';
import React, { useEffect, useState } from "react";

const corsProxy = "https://warm-waters-42495.herokuapp.com/";

const server = "http://localhost:3000";
// const server = "https://vanonselenp.github.io";

const generateImage = (next, srcs, comic) => {
  return (
    <a href={`${server}/comic-viewer?page=${next}&comic=${comic}`}>
      {srcs.map(src => (<img className="fit-picture"
            src={src}
            alt="Grapefruit slice atop a pile of other slices"/>))}
    </a>
  );
}

class GirlGenius {
  startPage = '20021104';

  getNextPage = (htmldoc, localPage) => {
    const s = new Set();
    Array
      .from(htmldoc.links)
      .filter(m => m.href.startsWith('http://www.girlgeniusonline.com/comic.php?date='))
      .map(m => m.href.split("=")[1])
      .forEach(m => s.add(m))

    s.add(localPage);

    const sorted = [...s].sort();

    const nextcomic = sorted[sorted.findIndex(m => m === localPage) + 1];
    return nextcomic;
  };

  getCurrentImages = (htmldoc) => {
    const images = Array.from(htmldoc.images)
          .map(m => m.src)
          .filter(m => m.startsWith("http://www.girlgeniusonline.com/ggmain/strips/ggmain"));
    return images
  }

  getPageUrl = (localPage) => {
    return `${corsProxy}https://www.girlgeniusonline.com/comic.php?date=${localPage}`;
  };
}

class Empowered {
  startPage = 'volume-1-page-1';

  getNextPage = (htmldoc, localPage) => {
    const s = new Set();
    Array
      .from(htmldoc.links)
      .filter(m => m.className === 'cc-next')
      .map(m => {
        const data = m.href.split('/');
        return data[data.length - 1]
      })
      .forEach(m => s.add(m))

    const sorted = [...s].sort();

    const nextcomic = sorted[0];
    console.log(nextcomic);
    return nextcomic;
  }

  getCurrentImages = (htmldoc) => {
    const images = Array.from(htmldoc.images)
          .map(m => m.src)
          .filter(m => m.startsWith("https://www.empoweredcomic.com/comic"));
    return images
  }
  
  getPageUrl = (localPage) => {
    return `${corsProxy}https://www.empoweredcomic.com/comic/${localPage}`
  }
}

const comicMap = {
  gg: new GirlGenius(),
  emp: new Empowered()
}

function App() {
  const [next, setNext] = useState("");
  const [currentImages, setCurrentImages] = useState([]);
  const [comic, setComic] = useState('gg');


  useEffect(() => {
    let localPage;
    let currentComic;

    if(window.location.href.includes("?")) {
      const parameters = window.location.href.split('?')[1].split('&');
     
      const comicSelection = parameters.find(m => m.startsWith('comic'));
      if(comicSelection) {
        const selection = comicSelection.split('=')[1];
        setComic(selection)
        currentComic = comicMap[selection];
      }

      const page = parameters.find(m => m.startsWith('page'));
      if(page) {
        localPage = page.split('=')[1];
      } else {
        localPage = currentComic.startPage;
      }

    } else {
      currentComic = comicMap['gg'];
      localPage = currentComic.startPage;
    }
    
    const url = currentComic.getPageUrl(localPage);
    fetch(url)
      .then(response => response.text())
      .then(data => { 
        const parser = new DOMParser();
        const htmldoc = parser.parseFromString(data, "text/html");

        setNext(currentComic.getNextPage(htmldoc, localPage));
        setCurrentImages(currentComic.getCurrentImages(htmldoc));
      });
  }, []);


  if (next !== "")
    return (
      <div className="App">
        <header className="App-header">
          {generateImage(next, currentImages, comic)}
        </header>
      </div>
    );
  else
      return (<></>);
}

export default App;
