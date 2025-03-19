import YouTubeVideo from "./YoutubeVideo";

const YouTubeSection = () => {
  return (
    <section id="youtube-section" className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen text-center md:text-left bg-white px-6">
      <div>
        <h2 className="text-center text-3xl font-bold my-6">My Video Introduction</h2>
        <YouTubeVideo videoId="NRGLWR3Lz48" />
      </div>
    </section>
  );
};

export default YouTubeSection;
