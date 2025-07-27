import clsx from "clsx";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useState } from "react";

const BentoCard = ({ card }) => {
  const {
    title,
    description,
    outStyles,
    bgSrc = null,
    buttonTitle = "",
  } = card;

  const [mouseCoords, setMouseCoords] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const deg = 8; // by how much to rotate the el

    // Center of the el
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    //The cooords inside the el
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Cursor diff with from the center
    const rotateY = ((x - centerX) / centerX) * deg;
    const rotateX = ((centerY - y) / centerY) * deg;

    setMouseCoords({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setMouseCoords({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      className={clsx("perspective-1000", outStyles)}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div
        className='flex flex-col justify-between p-5 size-full text-blue-50 border-hsla rounded-lg border-2 relative overflow-hidden min-h-96 md:min-h-64'
        style={{
          transform: `rotateX(${mouseCoords.rotateX}deg) rotateY(${mouseCoords.rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <video
          src={bgSrc}
          autoPlay
          loop
          muted
          className='absolute top-0 left-0 size-full object-cover object-center bg-violet-300'
        />
        <div className='flex flex-col gap-y-5 z-20'>
          <h2
            className='bento-title special-font max-w-40'
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className='text-xs md:text-base max-w-64'>{description}</p>
        </div>
        <Button
          glow={true}
          title={buttonTitle}
          leftIcon={<TiLocationArrow />}
          containerClass='flex gap-x-1 items-center border-hsla rounded-full px-4 py-1.5 text-xs text-white/20'
          bgColor='bg-black'
        />
      </div>
    </div>
  );
};

export default BentoCard;
