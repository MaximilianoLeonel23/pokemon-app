import Image from "next/image";
import bgPokeball from "../assets/images/bgPokeball.svg";

const BgPokeball = () => {
  return (
    <div className="relative">
      <Image
        src={bgPokeball}
        alt="pokeball"
        className="absolute left-0 right-0 -top-40 bottom-0 mx-auto -z-10 w-full sm:w-1/2 md:w-1/3"
      />
    </div>
  );
};

export default BgPokeball;
