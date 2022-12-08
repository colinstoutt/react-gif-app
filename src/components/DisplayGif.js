export default function DisplayGif({ gif }) {
  return gif.data ? (
    <img src={gif.data.images.downsized.url} alt="" />
  ) : (
    <div></div>
  );
}
