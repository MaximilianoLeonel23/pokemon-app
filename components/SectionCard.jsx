import { capitalize } from "@/helpers/capitalize";
import { getBgColor } from "@/helpers/getColorClass";
import Link from "next/link";
import React from "react";

const SectionCard = ({ section, color }) => {
  return (
    <Link href={`/${section}`}>
      <article
        className={`${getBgColor(
          color
        )} rounded-xl px-4 py-8 text-center drop-shadow`}
      >
        <h2 className="font-semibold text-zinc-600">{capitalize(section)}</h2>
      </article>
    </Link>
  );
};

export default SectionCard;
