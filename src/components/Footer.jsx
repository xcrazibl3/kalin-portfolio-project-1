import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='md:h-12 p-4 w-screen bg-violet-300 flex md:flex-row flex-col gap-y-4 justify-between items-center'>
      <div>
        <p className='text-sm font-light'>
          ©Kalin Mihaylov {year}. All rights reserved
        </p>
      </div>
      <div className='flex gap-x-2'>
        <a href='https://www.facebook.com/kalin.mihaylov.31'>
          <FaFacebook className='size-4 cursor-pointer hover:text-blue-50 duration-500' />
        </a>
        <a href='https://www.instagram.com/kala7aa/'>
          <FaInstagramSquare className='size-4 cursor-pointer hover:text-blue-50 duration-500' />
        </a>
        <a href='https://www.linkedin.com/in/kalin-mihaylov-5334452ba/'>
          <FaLinkedin className='size-4 cursor-pointer hover:text-blue-50 duration-500' />
        </a>
        <a href='https://github.com/xcrazibl3/kalin-portfolio-project-1'>
          <FaGithub className='size-4 cursor-pointer hover:text-blue-50 duration-500' />
        </a>
      </div>
      <div className='text-sm font-light group mr-4'>
        <a className='group-hover:underline' href='#hero'>
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
