import AnimatedTitle from "./AnimatedTitle";

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
          containerStyles='mt-5'
        />
      </div>
    </section>
  );
};

export default Story;

// Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities.
