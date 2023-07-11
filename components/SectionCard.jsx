import { capitalize } from "@/helpers/capitalize";
import Link from "next/link";
import React from "react";

const SectionCard = ({ section }) => {
  return (
    <Link href={`/${section}`}>
      <article
        className={`border border-zinc-200 bg-zinc-100 rounded-xl px-4 py-8 text-center hover:scale-110 transition`}
      >
        <h2 className="font-semibold text-zinc-600">{capitalize(section)}</h2>
      </article>
    </Link>
  );
};

export default SectionCard;
