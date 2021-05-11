
import axios from "axios";
import "./Bibliotheque.css";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Bibliotheque = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchBibliotheque = async () => {
    const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MY_KEY}&page=${page}`
            );

            setContent(data.results);
          };
        
          useEffect(() => {
            window.scroll(0, 0);
            fetchBibliotheque();
            // eslint-disable-next-line
          }, [page]);
        
          return (
            <div>
              <span className="pageTitle">Trending Today</span>
              <div className="trending">
                {content &&
                  content.map((c) => (
                    <SingleContent
                      key={c.id}
                      id={c.id}
                      poster={c.poster_path}
                      title={c.title || c.name}
                      date={c.first_air_date || c.release_date}
                      media_type={c.media_type}
                      vote_average={c.vote_average}
                    />
                  ))}
              </div>
              <CustomPagination setPage={setPage} />
            </div>
          );
        };
        
        export default Bibliotheque;