export default function MediaPlayer({ src, type }) {
  return type === "video" ? (
    <video controls className="w-full rounded shadow">
      <source src={src} type="video/mp4" />
    </video>
  ) : (
    <audio controls className="w-full">
      <source src={src} type="audio/mpeg" />
    </audio>
  );
}
