"use client";
import { useState, useEffect } from "react";
import AbilityCard from "@/components/AbilityCard";

const AbilitiesPage = () => {
  const [abilities, setAbilities] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setOffset((prevOffset) => prevOffset + 20);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/ability?limit=40&offset=${offset}`
      );
      const data = await response.json();

      setAbilities((prevState) => {
        const alreadyAbilities = prevState.map((ability) => ability.name);
        const newAbilities = data.results.filter(
          (ability) => !alreadyAbilities.includes(ability.name)
        );
        const allAbilities = [...prevState, ...newAbilities];
        allAbilities.sort((a, b) => a.name.localeCompare(b.name));
        return allAbilities;
      });
    };

    fetchData();
  }, [offset]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAbilities = abilities.filter((ability) =>
    ability.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="container py-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl text-zinc-700 font-bold mb-4">Abilities</h1>
        <input
          type="text"
          placeholder="Search by name or keep scrolling down"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-zinc-300 text-zinc-400 font-light rounded px-4 py-1"
        />
        <div className="grid gap-2 py-8">
          {filteredAbilities.map((ability, i) => (
            <AbilityCard key={i} url={ability.url} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AbilitiesPage;
