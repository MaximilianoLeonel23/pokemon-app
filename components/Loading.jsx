import Image from "next/image";
import bgPokeball from "@/assets/images/bgPokeball.svg";
const Loading = () => {
  return (
    <div>
      <Image src={bgPokeball} alt="loading" className="animate-spin" />
    </div>
  );
};

export default Loading;
