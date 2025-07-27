import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const Hero = () => {
  const [curVideoIndex, setCurVideoIndex] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const nextVideoRef = useRef(null);
  const TOTAL_VIDEOS = 4;

  useEffect(() => {
    if (loadedVideos >= TOTAL_VIDEOS - 1) {
      setHasLoaded(true);
    }
  }, [loadedVideos]);

  useGSAP(
    () => {
      if (isClicked) {
        gsap.to("#current-video", {
          opacity: 1,
          transformOrigin: "center center",
          scale: 1,
          duration: 1,
          height: "100dvh",
          width: "100vw",
          ease: "power1.inOut",
          onStart: () => {
            nextVideoRef.current.play();
          },
        });
      }
    },
    {
      dependencies: [curVideoIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#animation-section-wrapper", {
      clipPath: "polygon(10% 0, 80% 0, 90% 88%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#animation-section-wrapper", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#animation-section-wrapper",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const handleClickVideoMini = () => {
    setCurVideoIndex((prev) => (prev += 1));
    setIsClicked(true);
  };

  const handleLoad = () => {
    setLoadedVideos((prev) => (prev += 1));
  };

  const computeVideoPath = (index) => {
    return `/videos/hero-${(index % TOTAL_VIDEOS) + 1}.mp4`;
  };

  return (
    <section className='h-dvh bg-blue-75' id='hero'>
      {hasLoaded || (
        <div className='flex items-center bg-blue-75 justify-center absolute h-full w-screen top-0 right-0 z-[100]'>
          <div className='three-body z-50'>
            <div className='three-body__dot'></div>
            <div className='three-body__dot'></div>
            <div className='three-body__dot'></div>
          </div>
        </div>
      )}
      <div className='h-dvh w-screen bg-blue-75 relative'>
        <div
          className='h-dvh w-screen bg-blue-75 relative z-10'
          id='animation-section-wrapper'
        >
          {/* Initial Video */}
          <video
            src={computeVideoPath(curVideoIndex - 1)}
            id='initial-video'
            autoPlay
            loop
            muted
            className='size-full object-cover object-center'
            onLoadedData={handleLoad}
          />

          {/* Main video */}
          <video
            id='current-video'
            ref={nextVideoRef}
            loop
            src={computeVideoPath(curVideoIndex)}
            className='object-cover object-center size-64 z-20 opacity-0 absolute-center scale-50'
            onLoadedData={handleLoad}
          />
          <div
            className='overflow-hidden rounded-xl cursor-pointer absolute-center z-20 opacity-0 scale-50 hover:scale-100 hover:opacity-100 transition-all duration-500 size-48'
            onClick={handleClickVideoMini}
          >
            <video
              src={computeVideoPath(curVideoIndex + 1)}
              muted
              className='origin-center object-cover object-center size-full rounded-xl mask-clip-path'
              onLoadedData={handleLoad}
            />
          </div>

          {/* Gaming Heading */}
          <h2 className='special-font hero-heading text-blue-75  absolute z-40 bottom-5 right-5 '>
            g<b>a</b>ming
          </h2>

          {/* Main Heading */}
          <div className='absolute top-20 left-5 z-40 text-blue-100 space-y-3'>
            <h1 className='special-font hero-heading'>
              redefi<b>n</b>e
            </h1>
            <p className='max-w-48'>
              Enter the Metagame Layer Unleash the Play Economy
            </p>
            <Button
              id='watch-trailer'
              title='Watch trailer'
              leftIcon={<TiLocationArrow />}
              containerClass='bg-yellow-300 flex-center gap-1'
            />
          </div>

          {/* section container */}
        </div>

        <h2 className='special-font hero-heading text-black  absolute bottom-5 right-5'>
          g<b>a</b>ming
        </h2>
      </div>
      {/* Mini Video */}
    </section>
  );
};

export default Hero;
