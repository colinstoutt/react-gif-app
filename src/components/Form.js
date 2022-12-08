import { useState } from "react";

export default function Form({ getRandomGif, getSearchedGif }) {
  const [input, setInput] = useState("");

  const handleGenerate = (e) => {
    e.preventDefault();
    getRandomGif();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getSearchedGif(input);
  };
  return (
    <div className="forms">
      <form onSubmit={handleGenerate}>
        <input type="submit" value="GENERATE RANDOM GIF!" />
      </form>
      <h3>OR</h3>
      <form onSubmit={handleSearch}>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          placeholder="Search Gif"
        />
        <input disabled={!input} type="submit" value="Search Gif" />
      </form>
    </div>
  );
}
