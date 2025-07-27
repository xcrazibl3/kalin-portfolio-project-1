import AnimatedTitle from "./AnimatedTitle";
import TiltWrapper from "./TiltWrapper";
import SVGMask from "./SVGMask";

const Story = () => {
  return (
    <section className='bg-black min-h-screen w-screen py-40'>
      <div className='flex flex-col items-center'>
        <p className='font-general uppercase text-white text-sm md:text-[10px]'>
          the multiversal ip world
        </p>
        <AnimatedTitle
          title='the st<b>o</b>ry of<br/> a hidden real<b>m</b>'
          titleColor='text-white'
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
      </div>
    </section>
  );
};

export default Story;

// Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities.
