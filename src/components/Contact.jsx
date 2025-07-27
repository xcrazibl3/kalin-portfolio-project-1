import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const Contact = () => {
  return (
    <section
      className='md:mt-0 sm:mt-32 mt-10 py-20 px-10 min-h-[100vh]'
      id='contact'
    >
      <div className='bg-black rounded-xl h-full w-full relative py-24'>
        <div className='overflow-hidden h-full w-full absolute inset-0'>
          <div className='hidden sm:block contact-clip-path-1 absolute top-0 md:left-10 -left-10 w-72 '>
            <img src='/img/contact-1.webp' className='obejct-cover size-full' />
          </div>
          <div className='hidden sm:block contact-clip-path-2 absolute -bottom-20 md:left-10 -left-10 w-72 '>
            <img
              src='/img/contact-2.webp'
              className='obeject-cover size-full'
            />
          </div>
        </div>
        <div className='flex-center flex-col size-full text-violet-50'>
          <p className='font-general text-[10px] uppercase'>Join Zentry</p>
          <AnimatedTitle
            title="let's b<b>u</b>ild the <br/> new era of <br/> g<b>a</b>ming t<b>o</b>gether."
            titleColor='text-violet-50'
            containerStyles='mt-10 mix-blend-difference z-20'
          />
          <Button title='contact us' containerClass='mt-10' />
        </div>
        <div className='absolute -top-[360px] sm:-top-[460px] lg:top-0 h-full right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 xl:right-5 flex flex-col justify-center z-10'>
          <div className='h-96 absolute'>
            <img src='/img/swordman-partial.webp' className='size-full' />
          </div>
          <div className='h-96 sword-man-clip-path'>
            <img src='/img/swordman.webp' className='size-full' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
