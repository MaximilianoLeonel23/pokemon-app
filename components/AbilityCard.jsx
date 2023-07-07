import { getAbility } from "@/lib/getAbilities";
import { useState, useEffect } from "react";

const AbilityCard = ({ url }) => {
  const [singleAbility, setSingleAbility] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAbility(url);
        setSingleAbility(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);
  return (
    <article className="border border-gray-800 p-4">
      <h4>{singleAbility?.name}</h4>
      <p>{singleAbility?.effect_entries[1].effect}</p>
    </article>
  );
};

export default AbilityCard;
