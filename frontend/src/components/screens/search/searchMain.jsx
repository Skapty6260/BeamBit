import SearchHistory from "./SearchHistory/searchHistory";

const SearchMain = () => {
  return (
    <main className="bg-[#0a0a0a] h-full z-0 relative rounded-3xl shadow-2xl shadow-[#1a1a1a]">
      {/* Search history */}
      <div className="w-full h-screen text-white font-semibold JosefinSans text-5xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
        nihil soluta nostrum optio fugit, beatae distinctio id deleniti quo
        neque facere sapiente repellat incidunt corporis, cupiditate inventore
        expedita qui. Blanditiis?
      </div>
      <SearchHistory />
    </main>
  );
};

export default SearchMain;
