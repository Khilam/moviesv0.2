import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";

const Add = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [type, setType] = useState(0);
    const [favourites, setFavourites]=useState([]);
    
    const fetchAdd = async () => {
        try {
          const { data } = await axios.get(
            `https://api.themoviedb.org/3/favourites/${type ? "tv" : "movie"}?api_key=${
              process.env.REACT_APP_MY_KEY
            }&language=en-US&query=${favourites}&page=${page}&include_adult=false`
          );
          setContent(data.results);
          setNumOfPages(data.total_pages);
          // console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
    return (
        <div>
            <span className="pageTiltle"> My Favorite List</span>
            <div className="trending">
          {favourites &&
            favourites.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={type ? "tv" : "movie"}
                vote_average={c.vote_average}>
                    
                </SingleContent>
          ))}
             </div>
        
        </div>
    )
};
    
export default Add
