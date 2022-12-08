export default function DisplayGif({ gif }) {
  return gif.data ? (
    <img src={gif.data.images.downsized.url} alt="" />
  ) : (
    <h3>No gif to Generate yet</h3>
  );
}
