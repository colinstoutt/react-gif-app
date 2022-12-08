export default function DisplaySearch({ searchedGif }) {
  return searchedGif.data ? (
    <img
      src={searchedGif.data[0].images.downsized.url}
      alt={searchedGif.data[0].title}
    />
  ) : (
    <div></div>
  );
}
