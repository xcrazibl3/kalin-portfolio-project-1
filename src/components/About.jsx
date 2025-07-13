import AnimatedTitle from "./AnimatedTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const About = () => {
  const aboutImageRef = useRef(null);

  useGSAP(() => {
    gsap.to(aboutImageRef.current, {
      width: "100vw",
      height: "120dvh",
      borderRadius: 0,
      scrollTrigger: {
        trigger: "about-image",
        start: "top bottom",
        end: "top top",
        scrub: 1,
        pin: true,
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
        <div className='about-image' ref={aboutImageRef}>
          <img
            src='/img/about.webp'
            className='size-full object-cover object-center rounded-none'
          />
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
