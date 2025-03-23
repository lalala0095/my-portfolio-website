const YouTubeVideo = ({ videoId }) => {
    return (
      <div className="flex justify-center my-6">
        <iframe
          width="800"
          height="450"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    );
  };
  
  export default YouTubeVideo;
  