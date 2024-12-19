import React from "react";

const Genre = ({ data, setSelectedGenre, selectedGenre }) => {
  const handleChange = (id) => {
    if (selectedGenre.includes(id)) {
      setSelectedGenre((prev) =>
        prev.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedGenre((prev) => [...prev, id]);
    }
  };
  return (
    <div className="container flex gap-3 overflow-auto p-2">
      {data?.map((item) => (
        <div
          onClick={() => handleChange(item.id)}
          key={item.id}
          className={`whitespace-nowrap p-1 bg-slate-200 rounded-none hover:cursor-pointer select-none ${
            selectedGenre.includes(item.id) ? "bg-slate-500" : ""
          }`}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Genre;
