const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='h-20 w-screen bg-violet-300'>
      <div>©Kalin Mihaylov {year}. All rights reserved</div>
      <div></div>
      <div></div>
    </footer>
  );
};

export default Footer;
