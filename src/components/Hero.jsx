import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const [curVideoIndex, setCurVideoIndex] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const nextVideoIndex = curVideoIndex + 1;
  const TOTAL_VIDEOS = 4;
  const nextVideoRef = useRef(null);

  useGSAP(
    () => {
      if (isClicked) {
        gsap.set("#next-video", { opacity: "1" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          width: "100vw",
          height: "100vh",
          duration: 1,
          ease: "power1.inOut",
          onStart: nextVideoRef.current.play(),
        });
        gsap.to("#current-video", {
          opacity: 100,
          transformOrigin: "center center",
          scale: 1,
          duration: 1,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [curVideoIndex],
      revertOnUpdate: true,
    }
  );

  const handleClickVideoMini = () => {
    setCurVideoIndex((prev) => (prev += 1));
    setIsClicked(true);
  };

  const computeVideoPath = (index) => {
    return `/videos/hero-${(index % TOTAL_VIDEOS) + 1}.mp4`;
  };

  return (
    <section className='h-dvh'>
      <div className='h-dvh w-screen bg-blue-75 relative'>
        {/* Initial Video */}
        <video
          src={computeVideoPath(curVideoIndex - 1)}
          autoPlay
          loop
          muted
          className='size-full object-cover object-center'
        />

        {/* Main video */}
        <div
          className='absolute-center h-dvh w-screen overflow-hidden z-20 opacity-0 scale-50'
          id='current-video'
        >
          <video
            id='current-video'
            ref={nextVideoRef}
            loop
            src={computeVideoPath(curVideoIndex)}
            className='object-center object-cover size-full'
          />
        </div>
      </div>
      {/* Mini Video */}
      <div
        className='overflow-hidden rounded-xl cursor-pointer absolute-center z-20 opacity-0 scale-50 hover:scale-100 hover:opacity-100 transition-all duration-500 size-48'
        onClick={handleClickVideoMini}
      >
        <video
          src={computeVideoPath(nextVideoIndex)}
          muted
          className='origin-center object-cover object-center size-full rounded-xl'
        />
      </div>
    </section>
  );
};

export default Hero;
