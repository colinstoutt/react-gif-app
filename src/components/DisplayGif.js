export default function DisplayGif({ randomGif }) {
  return randomGif.data ? (
    <img src={randomGif.data.images.downsized.url} alt={randomGif.data.title} />
  ) : (
    <div></div>
  );
}
