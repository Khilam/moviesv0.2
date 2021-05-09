import Rating from '@material-ui/lab/Rating';
import {useState} from 'react';
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";



const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,

  
}) => {
    const [vote_average, setVote_average]=useState(0);
  return (
    <div className='media'>
      
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
      <Rating className='rating' value={vote_average} onChange={(e, value)=>setVote_average(value)}/>
    </div>
  );
};

export default SingleContent;