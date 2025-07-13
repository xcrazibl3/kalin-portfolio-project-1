import AnimatedTitle from "./AnimatedTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const About = () => {
  const imageContainerRef = useRef(null);

  useGSAP(() => {
    gsap.to(imageContainerRef.current, {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      // transformOrigin: "center center",
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "top top",
        end: "+=800 center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        markers: true,
      },
    });
  }, []);

  return (
    <section className='py-40 min-h-screen w-screen'>
      <h2 className='text-center'>Welcome to Zentry</h2>
      <AnimatedTitle
        title="Disc<b>o</b>ver the world's <br/> largest shared <b>a</b>dventure"
        containerStyles='special-font text-center mt-20 uppercase'
      />

      <div className='w-screen h-dvh relative mt-12'>
        <div
          className='absolute-center overflow-hidden z-20 h-[60vh] min-w-96 rounded-3xl imgContainer'
          ref={imageContainerRef}
        >
          <img src='/img/about.webp' className='object-cover  size-full' />
        </div>

        <p className='about-subtext'>
          Zentry unites every player from countless games and platforms
        </p>
      </div>
    </section>
  );
};

export default About;

//  Disc<b>o</b>ver the world's
//         <br /> largest shared <b>a</b>dventure

// The game of Games begins-your life,now an epic MMORPG
// Zentry unites every player from countless games and platforms
