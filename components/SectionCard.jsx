import { capitalize } from "@/helpers/capitalize";
import Link from "next/link";
import React from "react";

const SectionCard = ({ section }) => {
  return (
    <Link href={`/${section}`}>
      <article className={`bg-zinc-200 rounded-xl px-4 py-8 text-center`}>
        <h2 className="font-semibold text-zinc-600">{capitalize(section)}</h2>
      </article>
    </Link>
  );
};

export default SectionCard;
