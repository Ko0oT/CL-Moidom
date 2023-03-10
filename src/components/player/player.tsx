function Player() {
  return (
    <>
      <div className="balloon-player mt-4">
        <iframe
          width={470}
          height={300}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="balloon-links">
        <div className="links">
          <a href="#">Архив</a>
          <a href="#">Снимки</a>
          <a href="#">Происшествия</a>
          <span>
            Ракурс камеры
          </span>
        </div>
      </div>
    </>
  );
}

export default Player;
