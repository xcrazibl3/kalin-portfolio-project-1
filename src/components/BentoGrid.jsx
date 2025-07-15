import { bentoGridList } from "../consts";
import BentoCard from "./BentoCard";

const BentoGrid = () => {
  return (
    <div className='grid grid-cols-2 gap-7 w-full h-full'>
      {bentoGridList.map((card, index) => (
        <BentoCard key={index} card={card} />
      ))}
    </div>
  );
};

export default BentoGrid;
