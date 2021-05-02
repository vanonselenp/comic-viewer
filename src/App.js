import './App.css';
import React, { useEffect, useState } from "react";

const date = "20021104";
const corsProxy = "https://warm-waters-42495.herokuapp.com/";
const ggurl = (date) => `https://www.girlgeniusonline.com/comic.php?date=${date}`;

const generateImage = (current, next) => {
  return (
    <a href={`http://localhost:3000/comic-reader/gg/${next}`}>
          <img class="fit-picture"
            src={`http://www.girlgeniusonline.com/ggmain/strips/ggmain${current}.jpg`}
            alt="Grapefruit slice atop a pile of other slices"/>
    </a>
  );
}

function App() {
  // const [image, setImage] = useState("");
  const [next, setNext] = useState("");
  const [path, setPath] = useState("");

  useEffect(() => {
    const currentDate = window.location.href.split('/');
    let localDate = currentDate[currentDate.length - 1];
    if(localDate === "gg") localDate = date;
    
    setPath(localDate)
    
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
          .forEach(m => s.add(m.href));

        const first = Array.from(s.values())[s.size - 2];

        const nextComic = first.split("=");
        setNext(nextComic[nextComic.length - 1]);
      });
  }, []);



  return (
    <div className="App">
      <header className="App-header">
        {generateImage(path, next)}
      </header>
    </div>
  );
}

export default App;
