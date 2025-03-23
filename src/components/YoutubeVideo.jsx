const YouTubeVideo = ({ videoId }) => {
  return (
    <div className="flex justify-center my-6">
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeVideo;
