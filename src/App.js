import { useState } from "react";
import "./App.css";
import DisplayGif from "./components/DisplayGif";
import DisplaySearch from "./components/DisplaySearch";
import Form from "./components/Form";

function App() {
  const [randomGifData, setRandomGifData] = useState({});
  const [searchedGifData, setSearchedGifData] = useState({});

  async function getRandomGif() {
    const randomGifUrl = `https://api.giphy.com/v1/gifs/random?api_key=5VwLe717cEywTonERcucCLb3t3y103Nt&tag=&rating=g`;
    const res = await fetch(randomGifUrl);
    const json = await res.json();
    setRandomGifData(json);
  }

  async function getSearchedGif(searchTerm) {
    const gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=5VwLe717cEywTonERcucCLb3t3y103Nt&q=${searchTerm}&limit=10&offset=0&rating=g&lang=en`;
    const res = await fetch(gifUrl);
    const json = await res.json();
    setSearchedGifData(json);
  }

  return (
    <div className="App">
      <Form getRandomGif={getRandomGif} getSearchedGif={getSearchedGif} />
      <DisplayGif randomGif={randomGifData} />
      <DisplaySearch searchedGif={searchedGifData} />
    </div>
  );
}

export default App;
