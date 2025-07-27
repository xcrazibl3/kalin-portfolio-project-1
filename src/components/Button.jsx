import clsx from "clsx";
import { useState } from "react";

const Button = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
  glow = false,
  bgColor = "bg-violet-50",
}) => {
  const [isShadowVisible, setIsShadowVisible] = useState(glow);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    if (!glow) return;
    setIsShadowVisible(true);
  };
  const handleMouseLeave = () => {
    if (!glow) return;
    setIsShadowVisible(false);
  };

  return (
    <button
      id={id}
      className={clsx(
        `group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full ${bgColor} px-7 py-3 text-black`,
        containerClass
      )}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      {leftIcon}

      <span className='relative inline-flex overflow-hidden font-general text-xs uppercase z-20'>
        <div className='translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12'>
          {title}
        </div>
        <div className='absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0'>
          {title}
        </div>
      </span>

      {rightIcon}

      {isShadowVisible && (
        <div
          className='absolute -translate-x-1/2 -translate-y-1/2 w-28 h-20 rounded-full bg-radial from-violet-400/40 to-transparent blur-lg'
          style={{
            top: `${mouseCoords.y}px`,
            left: `${mouseCoords.x}px`,
          }}
        ></div>
      )}
    </button>
  );
};

export default Button;
