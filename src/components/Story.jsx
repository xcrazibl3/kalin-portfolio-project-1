import AnimatedTitle from "./AnimatedTitle";
import TiltWrapper from "./TiltWrapper";
import SVGMask from "./SVGMask";
import Button from "./Button";

const Story = () => {
  return (
    <section className='bg-black min-h-screen w-screen py-40'>
      <div className='flex flex-col items-center text-violet-50'>
        <p className='font-general uppercase  text-sm md:text-[10px]'>
          the multiversal ip world
        </p>
        <AnimatedTitle
          title='the st<b>o</b>ry of<br/> a hidden real<b>m</b>'
          titleColor='text-violet-50'
          containerStyles='mt-5 mix-blend-difference z-20'
        />
        {/* Image container */}
        <TiltWrapper
          wrapperStyles='flex-center h-[500px] w-screen relative -mt-16 filter-story container-transform-story'
          cardStyles='size-full clip-path-story w-8/12 overflow-hidden'
        >
          <img
            className='object-cover object-center scale-150'
            src='/img/entrance.webp'
          />
          <SVGMask />
        </TiltWrapper>
        <div className='md:self-end px-10 -mt-20 md:mt-0 flex-center flex-col'>
          <p className='max-w-sm text-center font-circular-web md:text-start'>
            Where realms converge, lies Zentry and the boundless pillar.
            Discover its secrets and shape your fate amidst infinite
            opportunities.
          </p>
          <Button title='discover prologue' containerClass='mt-6 text-xs' />
        </div>
      </div>
    </section>
  );
};

export default Story;
