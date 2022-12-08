export default function Form({ getGif }) {
  const handleGenerate = (e) => {
    e.preventDefault();
    getGif();
  };
  return (
    <>
      <form onSubmit={handleGenerate}>
        <input type="submit" value="Generate a Gif!" />
      </form>
    </>
  );
}
