import AnimatedTitle from "./AnimatedTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const About = () => {
  const imageContainerRef = useRef(null);
  const animationTarget = useRef(null);

  useGSAP(() => {
    gsap.to(imageContainerRef.current, {
      width: "100vw",
      height: "100%",
      borderRadius: 0,
      transformOrigin: "center center",
      scrollTrigger: {
        trigger: animationTarget.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
  }, []);

  return (
    <section className='mt-40 min-h-screen w-screen'>
      <h2 className='text-center'>Welcome to Zentry</h2>
      <AnimatedTitle
        title="Disc<b>o</b>ver the world's <br/> largest shared <b>a</b>dventure"
        containerStyles='special-font text-center mt-20 uppercase'
      />

      <div
        className='w-screen h-[100vh] mt-12 flex justify-center bg-blue-75'
        ref={animationTarget}
      >
        <div
          className='overflow-hidden h-[60vh] min-w-96 rounded-3xl imgContainer relative z-20'
          ref={imageContainerRef}
        >
          <img
            src='/img/about.webp'
            className='object-cover object-center size-full absolute top-0 left-0'
          />
        </div>

        <p className='about-subtext'>
          The game of Games begins- your life, now an epic MMORPG <br /> Zentry
          unites every player from countless games and platforms
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
