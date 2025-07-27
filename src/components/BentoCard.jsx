import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import TiltWrapper from "./TiltWrapper";

const BentoCard = ({ card }) => {
  const {
    title,
    description,
    outStyles,
    bgSrc = null,
    buttonTitle = "",
  } = card;

  return (
    <TiltWrapper
      wrapperStyles={outStyles}
      cardStyles='flex flex-col justify-between p-5 size-full text-blue-50 border-hsla rounded-lg border-2 relative overflow-hidden min-h-96 md:min-h-64'
    >
      <video
        src={bgSrc}
        autoPlay
        loop
        muted
        className='absolute top-0 left-0 size-full object-cover object-center bg-violet-300'
      />
      <div className='flex flex-col gap-y-5 z-20'>
        <h2
          className='bento-title special-font max-w-40'
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className='text-xs md:text-base max-w-64'>{description}</p>
      </div>
      <Button
        glow={true}
        title={buttonTitle}
        leftIcon={<TiLocationArrow />}
        containerClass='flex gap-x-1 items-center border-hsla rounded-full px-4 py-1.5 text-xs text-white/20'
        bgColor='bg-black'
      />
    </TiltWrapper>
  );
};

export default BentoCard;
