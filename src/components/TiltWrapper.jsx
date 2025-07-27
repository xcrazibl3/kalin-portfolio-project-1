import clsx from "clsx";
import { useState } from "react";

const TiltWrapper = ({ children, wrapperStyles, cardStyles }) => {
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
      className={clsx("perspective-1000", wrapperStyles)}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div
        className={cardStyles}
        style={{
          transform: `rotateX(${mouseCoords.rotateX}deg) rotateY(${mouseCoords.rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default TiltWrapper;
