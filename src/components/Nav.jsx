import Button from "./Button";
import { navItemsList } from "../consts";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Nav = () => {
  return (
    <nav className='absolute top-3 w-screen p-4 px-6 text-white bg-transparent z-50 flex items-center justify-between'>
      <div className='flex gap-x-5'>
        <div className='h-10 overflow-hidden rounded-full'>
          <img src='/img/kai-ju.png' className='size-full' />
        </div>
        <Button title='products' containerClass='text-xs' />
      </div>
      <div className='mr-5 flex gap-x-8 items-center'>
        <ul className='flex gap-x-8'>
          {navItemsList.map((navLink) => (
            <NavLink navItem={navLink} key={navLink.name} />
          ))}
        </ul>
        {/* <div className='flex font-general items-center uppercase h-[15px] text-[12px]'>
          play
        </div> */}
        <MusicBar />
      </div>
    </nav>
  );
};

const NavLink = ({ navItem }) => {
  return (
    <li className='nav-hover-btn'>
      <a
        className='font-general text-[12px] uppercase text-blue-50'
        href={navItem.href}
      >
        {navItem.name}
      </a>
    </li>
  );
};

const MusicBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const musicBarRefs = useRef([]);
  const audioRef = useRef(null);
  const numOfBars = [1, 2, 3, 4, 5];

  useGSAP(() => {
    const bars = musicBarRefs.current; //take the array of bars
    gsap.killTweensOf(bars); //clear old animations on each click

    if (isPlaying) {
      bars.forEach((bar) => {
        gsap.to(bar, {
          height: `${Math.random() * 20 + 6}px`, // rand height 6-26px
          duration: Math.random() * 0.4 + 0.3, // rand duration  0.3-0.7 sec
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    } else {
      bars.forEach((bar) => {
        gsap.to(bar, {
          height: "3px",
          duration: 0.2,
        });
      });
    }
  }, [isPlaying]);

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else audioRef.current?.play();
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <div className='flex-center gap-[1px] cursor-pointer' onClick={handleClick}>
      {numOfBars.map((bar, index) => (
        <div
          className='h-[3px] w-[2px] bg-white'
          key={index}
          ref={(el) => (musicBarRefs.current[index] = el)}
        ></div>
      ))}
      <audio src='/audio/loop.mp3' ref={audioRef} loop className='hidden' />
    </div>
  );
};

export default Nav;
