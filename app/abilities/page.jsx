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
      setAbilities((prevResources) => [...prevResources, ...data.results]);
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
    <main className="container mx-auto px-4">
      <h1>Abilities</h1>
      <input
        type="text"
        placeholder="search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="grid gap-4">
        {filteredAbilities.map((ability, i) => (
          <AbilityCard key={i} url={ability.url} />
        ))}
      </div>
    </main>
  );
};

export default AbilitiesPage;
