import Button from "./Button";
import { navItemsList } from "../consts";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const [curScroll, setCurScroll] = useState(0);
  const [prevScroll, setPrevScroll] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const navAbsRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handlleScroll = () => {
    if (window.scrollY > 350) {
      setCurScroll(scrollY);
      if (curScroll < prevScroll) {
        setIsNavVisible(true);

        console.log("Nav is visible");
      }
      if (curScroll > prevScroll) {
        setIsNavVisible(false);
        console.log("Nav is invisible");
      }
    }
    setPrevScroll(() => curScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlleScroll);
    return () => {
      window.removeEventListener("scroll", handlleScroll);
    };
  }, [handlleScroll]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: navAbsRef.current,
        start: "top top",
        end: "+=300",
        scrub: true,
      },
    });
    tl.to(navAbsRef.current, {
      backgroundColor: "black",
      duration: 1,
    });
    tl.to(navAbsRef.current, {
      opacity: 0.6,
      duration: 1,
    });
    tl.to(navAbsRef.current, {
      opacity: 0,
      y: "-70px",
      duration: 0.5,
    });
  }, []);

  useGSAP(() => {
    gsap.set(navAbsRef.current, {
      y: 0,
    });
    if (isNavVisible)
      gsap.to(navAbsRef.current, {
        opacity: 1,
        duration: 0.5,
      });
    if (!isNavVisible)
      gsap.to(navAbsRef.current, {
        opacity: 0,
        duration: 0.5,
      });
  }, [isNavVisible]);

  return (
    <nav
      className='fixed top-3 w-screen p-4 px-6 text-white bg-transparent z-50 flex items-center justify-between'
      ref={navAbsRef}
    >
      <div className='flex gap-x-5'>
        <div className='h-10 overflow-hidden rounded-full'>
          <img src='/img/kai-ju.png' className='size-full' />
        </div>
        <Button title='products' containerClass='text-xs' />
      </div>
      <div className='mr-5 flex gap-x-12 items-center'>
        <Hamburger />
        <ul className='hidden md:flex gap-x-12'>
          {navItemsList.map((navLink) => (
            <NavLink navItem={navLink} key={navLink.name} />
          ))}
        </ul>
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

const Hamburger = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const hamburgerMenuRef = useRef(null);

  const handleClickOutside = (e) => {
    console.log(e.target);
    if (
      hamburgerMenuRef.current &&
      !hamburgerMenuRef.current.contains(e.target)
    )
      setIsNavOpen(false);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavOpen]);

  return (
    <div
      className='block md:hidden size-8 cursor-pointer relative'
      onClick={() => setIsNavOpen((prev) => !prev)}
      ref={hamburgerMenuRef}
    >
      <RxHamburgerMenu className='size-full' />
      {isNavOpen && (
        <div className='absolute left-0 -translate-x-1/2'>
          <ul className='flex flex-col justify-center gap-y-4 bg-black/40 backdrop-blur-md p-4 px-6'>
            {navItemsList.map((navLink) => (
              <NavLink navItem={navLink} key={navLink.name} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
