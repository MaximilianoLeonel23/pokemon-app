"use client";
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const NewsSection = () => {
  const [allNews, setAllNews] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setPage((prevPage) => prevPage + 1);
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
        `https://newsapi.org/v2/everything?q=pokemon&pageSize=20&page=${page}&language=en&apiKey=84addccd801748208bb46e2890093d0e`
      );
      const data = await response.json();
      setAllNews((prevNews) => [...prevNews, ...(data?.articles || [])]);
    };

    fetchData();
  }, [page]);
  return (
    <section className="container py-8 bg-zinc-100">
      <h2 className="text-2xl text-zinc-700 font-bold p-4">What is new?</h2>
      <div className="grid sm:grid-cols-2">
        {allNews?.map((article) => {
          return <NewsCard article={article} />;
        })}
      </div>
    </section>
  );
};

export default NewsSection;
