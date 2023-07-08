import { capitalize } from "@/helpers/capitalize";
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
    <article className="border border-zinc-200 bg-zinc-100 px-4 py-2 rounded">
      <div className="leading-relaxed text-zinc-600">
        <h4 className="font-medium">{capitalize(singleAbility?.name)}</h4>
        <p className="font-light text-sm">
          {
            singleAbility?.effect_entries.filter(
              (entrie) => entrie.language.name === "en"
            )[0]?.effect
          }
        </p>
      </div>
    </article>
  );
};

export default AbilityCard;
