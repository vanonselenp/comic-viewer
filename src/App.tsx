import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

const date = "20021104";
const corsProxy = "https://warm-waters-42495.herokuapp.com/";
const ggurl = (date: string) => `https://www.girlgeniusonline.com/comic.php?date=${date}`;

const server = "http://localhost:3000";
// const server = "https://vanonselenp.github.io";

console.log(server);

const generateImage = (next: string, src: string) => {
  return (
    <a href={`${server}/comic-viewer?${next}`}>
          <img className="fit-picture"
            src={src}
            alt="Grapefruit slice atop a pile of other slices"/>
    </a>
  );
}

function App() {
  // const [image, setImage] = useState("");
  const [next, setNext] = useState("");
  const [path, setPath] = useState("");
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    let localDate = date;
    if(window.location.href.includes("?")) {
      const currentDate = window.location.href.split('?');
      localDate = currentDate[currentDate.length - 1];
    }
    
    setPath(localDate)
    
    const url = `${corsProxy}${ggurl(localDate)}`;
    fetch(url)
      .then(response => response.text())
      .then(data => { 
        const parser = new DOMParser();
        const htmldoc = parser.parseFromString(data, "text/html");

        const links = new Set();
        Array
          .from(htmldoc.links)
          .filter(m => m.href.startsWith('http://www.girlgeniusonline.com/comic.php?date='))
          .forEach(m => links.add(m.href));

        const first: string | any = Array.from(links.values())[links.size - 2];

        const nextComic = first.split("=");
        setNext(nextComic[nextComic.length - 1]);

        const image = Array.from(htmldoc.images)
        .map(m => m.src)
        .find(m => m.startsWith("http://www.girlgeniusonline.com/ggmain/strips/ggmain"));

        setCurrentImage(`${image}`);
      });
  }, []);


  if (next != "")
    return (
      <div className="App">
        <header className="App-header">
          {generateImage(next, currentImage)}
        </header>
      </div>
    );
  else
      return (<></>);
}

export default App;
