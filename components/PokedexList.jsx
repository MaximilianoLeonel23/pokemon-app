"use client";
import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

const PokedexList = () => {
  const [resources, setResources] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setOffset((prevOffset) => prevOffset + 60);
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
        `https://pokeapi.co/api/v2/pokemon?limit=60&offset=${offset}`
      );
      const data = await response.json();
      setResources((prevResources) => [...prevResources, ...data.results]);
    };

    fetchData();
  }, [offset]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {resources.map((resource, index) => (
        <PokemonCard key={index} url={resource.url} />
      ))}
    </div>
  );
};

export default PokedexList;
