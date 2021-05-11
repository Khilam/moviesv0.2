import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Rating from '@material-ui/lab/Rating';
import { useEffect } from 'react';
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
 const [activeHeart, setActiveHeart] = useState (false);
const [favourites, setFavourites]=useState([]);
 

const addToFavourites=(media_type)=>{
  const newFavouriteList=[...favourites, media_type];
  setFavourites(newFavouriteList);
}

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
      <div className='row icons'>
       <Rating className='rating' value={vote_average} onChange={(e, value)=>setVote_average(value)}/>
       < IconButton onClick={()=>setActiveHeart (!activeHeart)} 
       handleClick={(event) => 
       addToFavourites?this.addToFavourites(event,media_type.favourites):
       this.removeFromMyFavourites(event,media_type.Add)}>
         {activeHeart?(
           <FavoriteIcon className='fav'/>
         ):(<FavoriteIcon/>
         )}
       </ IconButton>
       </div>
       
</div>
   




  );
  };

export default SingleContent;