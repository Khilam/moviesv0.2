import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import { useEffect } from 'react';

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
  vote_average,
all,




}) => {
    
  
    const defaultList = ([]);
 const [activeHeart, setActiveHeart] = useState (false);

 const [favoriteMovie, setFavoriteMovie] = useState([])
const getFavoriteMovie= (e)=>{
 favoriteMovie.push(e)
 console.log(favoriteMovie)
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
       < IconButton onClick={()=>{setActiveHeart (!activeHeart); getFavoriteMovie(all) }}
        
      >
         {activeHeart?(
           <FavoriteIcon className='fav'/>
         ):(<FavoriteIcon/>
         )}
       </ IconButton>
       
       </div>
      
       

</div>
   




  );
         }

export default SingleContent;