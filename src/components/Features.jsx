import BentoGrid from "./BentoGrid";

const Features = () => {
  return (
    <section className='py-32 px-5 md:px-10 bg-black min-h-screen w-screen'>
      <h2 className='font=circular-web text-blue-50 text-lg'>
        Into the Metagame Layer
      </h2>
      <p className='font-circular-web text-blue-50/50 max-w-md mb-32'>
        Immerse yourself in a rich and ever-expanding universe where a vibrant
        array of products converge into an interconnected overlay experience on
        your world.
      </p>
      <div className='w-full min-h-[135vh]'>
        <BentoGrid />
      </div>
    </section>
  );
};

export default Features;
