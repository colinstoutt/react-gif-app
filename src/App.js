import { useState } from "react";
import "./App.css";
import DisplayGif from "./components/DisplayGif";
import Form from "./components/Form";

function App() {
  const [gifData, setGifData] = useState({});

  async function getGif() {
    const randomGifUrl = `https://api.giphy.com/v1/gifs/random?api_key=5VwLe717cEywTonERcucCLb3t3y103Nt&tag=&rating=g`;
    const res = await fetch(randomGifUrl);
    const json = await res.json();
    setGifData(json);
  }

  console.log(gifData);

  return (
    <div className="App">
      <Form getGif={getGif} />
      <DisplayGif gif={gifData} />
    </div>
  );
}

export default App;
