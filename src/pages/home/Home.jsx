import React, { memo, useEffect, useState } from "react";
import Movies from "../../components/movies/Movies";
import { request } from "../../api";
import { Carousel } from "../../components/carousel/Carousel";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Genre from "../../components/genre/Genre";
import Pagination from "@mui/material/Pagination";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState([]);

  
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    request("/genre/movie/list").then((res) => {
      setGenres(res.data.genres);
    });
  }, []);
  useEffect(() => {
    request("/discover/movie", {
      params: {
        page,
        with_genres: selectedGenre.join(","),
      },
    }).then((res) => {
      setData(res.data);
    });
  }, [page, selectedGenre]);
  return (
    <div className="bg-black">
      <Header />
      <Carousel data={data} />{" "}
      {/* <Genre
        data={genres}
        setSelectedGenre={setSelectedGenre}
        selectedGenre={selectedGenre}
      /> */}
      <Movies data={data} />
      <div className="flex justify-center py-6">
        <Pagination
          page={page}
          onChange={handleChange}
          count={data?.total_pages <= 500 ? data?.total_pages : 500}
        />
      </div>
      <Footer />
    </div>
  );
};

export default memo(Home);
