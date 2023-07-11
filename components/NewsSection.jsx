const NewsSection = () => {
  // const [allNews, setAllNews] = useState([]);
  // const [page, setPage] = useState(1);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop ===
  //       document.documentElement.offsetHeight
  //     ) {
  //       setPage((prevPage) => prevPage + 1);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `https://newsapi.org/v2/everything?q=pokemon&language=en&pageSize=20&page=${page}&apiKey=84addccd801748208bb46e2890093d0e`
  //     );
  //     const data = await response.json();
  //     setAllNews((prevNews) => [...prevNews, ...(data?.articles || [])]);
  //   };

  //   fetchData();
  // }, [page]);
  return (
    <section className="container py-8 bg-zinc-100">
      <div className="flex flex-col gap-4 p-4">
        <h2 className="text-2xl text-zinc-700 font-bold">What is new?</h2>
        <p className="text-zinc-700 font-medium">Coming soon...</p>
      </div>
      {/* <div className="grid sm:grid-cols-2 gap-4">
        {allNews?.map((article) => {
          return <NewsCard article={article} />;
        })}
      </div> */}
    </section>
  );
};

export default NewsSection;
