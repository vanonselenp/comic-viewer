import './App.css';
import React, { useEffect, useState } from "react";

const date = "20021104";
const corsProxy = "https://warm-waters-42495.herokuapp.com/";
const ggurl = (date) => `https://www.girlgeniusonline.com/comic.php?date=${date}`;

const server = "http://localhost:3000";
// const server = "https://vanonselenp.github.io";

const generateImage = (next, srcs) => {
  return (
    <a href={`${server}/comic-viewer?${next}`}>
      {srcs.map(src => (<img className="fit-picture"
            src={src}
            alt="Grapefruit slice atop a pile of other slices"/>))}
    </a>
  );
}

function App() {
  const [next, setNext] = useState("");
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    let localDate = date;
    if(window.location.href.includes("?")) {
      const currentDate = window.location.href.split('?');
      localDate = currentDate[currentDate.length - 1];
    }
    
    const url = `${corsProxy}${ggurl(localDate)}`;
    fetch(url)
      .then(response => response.text())
      .then(data => { 
        const parser = new DOMParser();
        const htmldoc = parser.parseFromString(data, "text/html");

        const s = new Set();
        Array
          .from(htmldoc.links)
          .filter(m => m.href.startsWith('http://www.girlgeniusonline.com/comic.php?date='))
          .map(m => m.href.split("=")[1])
          .forEach(m => s.add(m))

        s.add(localDate);

        const sorted = [...s].sort();

        const nextcomic = sorted[sorted.findIndex(m => m === localDate) + 1];
        setNext(nextcomic);

        const images = Array.from(htmldoc.images)
          .map(m => m.src)
          .filter(m => m.startsWith("http://www.girlgeniusonline.com/ggmain/strips/ggmain"));

          setCurrentImages(images);
      });
  }, []);


  if (next !== "")
    return (
      <div className="App">
        <header className="App-header">
          {generateImage(next, currentImages)}
        </header>
      </div>
    );
  else
      return (<></>);
}

export default App;
