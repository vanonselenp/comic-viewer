import './App.css';
import { GirlGenius } from './comic/GirlGenius';
import { Empowered } from './comic/Empowered';
import React, { useEffect, useState } from "react";

// const server = "http://localhost:3000";
const server = "https://vanonselenp.github.io";

const generateImage = (next, srcs, comic) => {
  return (
    <>
      <h3>{comic}</h3>
      <a href={`${server}/comic-viewer?page=${next}&comic=${comic}`}>
        {srcs.map(src => (<img className="fit-picture"
              src={src}
              alt="Grapefruit slice atop a pile of other slices"/>))}
      </a>
    </>
  );
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
