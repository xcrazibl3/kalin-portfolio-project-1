import clsx from "clsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const AnimatedTitle = ({
  title,
  containerStyles,
  titleColor = "text-black",
}) => {
  const titleRef = useRef(null);
  const wordRefs = useRef([]);
  useGSAP(() => {
    gsap.to(wordRefs.current, {
      opacity: 1,
      translateX: 0,
      translateY: 0,
      translateZ: 0,
      rotateY: 0,
      rotateX: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: titleRef.current,
        scrub: 1,
        start: "top bottom",
        end: "+=200",
      },
    });
  }, []);

  return (
    <h2 className={clsx("animated-title", containerStyles)} ref={titleRef}>
      {title.split("<br/>").map((line, index) => (
        <div
          className='flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3'
          key={index}
        >
          {line.split(" ").map((word, index) => (
            <span
              key={index}
              ref={(el) => wordRefs.current.push(el)}
              className={clsx("animated-word text-black", titleColor)}
              dangerouslySetInnerHTML={{ __html: word }}
            ></span>
          ))}
        </div>
      ))}
    </h2>
  );
};

export default AnimatedTitle;
