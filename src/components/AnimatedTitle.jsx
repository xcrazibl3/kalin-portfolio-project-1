import clsx from "clsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AnimatedTitle = ({ title, containerStyles }) => {
  useGSAP(() => {
    gsap.to(".animated-word", {
      opacity: 1,
      translateX: 0,
      translateY: 0,
      translateZ: 0,
      rotateY: 0,
      rotateX: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".animated-title",
        scrub: 1,
        start: "top bottom",
        end: "+=200",
      },
    });
  }, []);

  return (
    <h2 className={clsx("animated-title", containerStyles)}>
      {title.split("<br/>").map((line, index) => (
        <div
          className='flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3'
          key={index}
        >
          {line.split(" ").map((word, index) => (
            <span
              key={index}
              className='animated-word special-font text-black'
              dangerouslySetInnerHTML={{ __html: word }}
            >
              {/* {word} */}
            </span>
          ))}
        </div>
      ))}
    </h2>
  );
};

export default AnimatedTitle;
