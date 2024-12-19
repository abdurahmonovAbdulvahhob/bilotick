import React, { memo } from "react";

const MovieItem = ({ title, poster_path, original_language }) => {
  return (
    <div className="w-56 rounded-lg shadow-md overflow-hidden opacity-100 transition-transform hover:scale-105">
      <img
        src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white whitespace-nowrap overflow-hidden">{title}</h3>
        <p className="text-sm text-white mt-1">
          Language: {original_language.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default memo(MovieItem);
