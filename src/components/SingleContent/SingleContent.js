import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Rating from '@material-ui/lab/Rating';
import { useEffect } from 'react';
import {useState} from 'react';
import { img_300, unavailable } from "../../config/config";

import "./SingleContent.css";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { TextRotationAngleupSharp } from '@material-ui/icons';








const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average
  
}) => {
    

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
    
      <Rater interactive={false} total={5} rating={vote_average/2} />
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