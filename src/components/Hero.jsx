import { use, useState } from "react";

const Hero = () => {
  const [curVideoIndex, setCurVideoIndex] = useState(1);
  const nextVideoIndex = curVideoIndex + 1;
  const TOTAL_VIDEOS = 4;

  const handleClickVideoMini = () => {
    setCurVideoIndex((prev) => (prev += 1));
  };

  const computeVideoPath = (index) => {
    return `/videos/hero-${(index % TOTAL_VIDEOS) + 1}.mp4`;
  };

  return (
    <section className='bg-orange-500 h-dvh relative'>
      <div className='h-dvh w-screen bg-blue-300 relative'>
        <div id='big-video-container'>
          <video src={computeVideoPath(curVideoIndex)} autoPlay loop muted />
        </div>

        <div className='relative'>
          <div
            id='minVideoContainer'
            className='absolute-center z-10 h-36 w-36 aspect-square overflow-hidden cursor-pointer
        '
          >
            <video
              src={computeVideoPath(nextVideoIndex)}
              muted
              className='origin-center scale-150 object-cover object-center h-full'
              onClick={handleClickVideoMini}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
