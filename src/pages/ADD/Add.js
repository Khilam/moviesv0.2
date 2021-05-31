import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import { img_300, unavailable } from "../../config/config";
import "../ADD/Add.css";

// import "../../components/SingleContent/SingleContent.css";

import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';





import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

import { AllInboxRounded, AllInclusiveOutlined } from '@material-ui/icons';



import firebase from '../../lib/firebase'







const Add = ({favoriteMovie}) => {
   
 
    
    
    const [fav, setFav] = useState([]);
    
    

     useEffect(() => {
    
        const dataArr = []
        const res = firebase.firestore().collection('favouritemovies');
        res.get().then(data => {
            data.docs.map((doc) => {
                const { media_type, title, vote_average, poster, date  } = doc.data()
                dataArr.push({id: doc.id,
                  media_type, title, vote_average, poster, date , 
                })
            })
            setFav(dataArr)
        })
    }, [])
   console.log(fav)


   const [activeHeart, setActiveHeart] = useState (true);
  //  const [favorites, setFavorites] = useState([]);
   const handleDelete = (id) => {
   
    firebase.firestore().collection('favouritemovies').doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
        
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
    // const setFavorites=[...favorites];
    
    console.log(id)
    
}


    return (
      <div>  <span className="pageTitle"> My Favorite List</span>
        <div className='firebase'>
           
            {fav.map((favorites, index)=>{
              
                return (
                  <div className='media-firebase'>
                 <div key={index}> 


               
      
      <img
      
        className="poster"
        src={favorites.poster ? `${img_300}${favorites.poster}` : unavailable}
        alt={favorites.title}
      />
       
      <b className="title">{favorites.title}</b>
      <span className="subTitle">
        {favorites.media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{favorites.date}</span>
      </span>
      <div className='row icons'>
    
      <Rater interactive={false} total={5} rating={favorites.vote_average/2} />

      < IconButton onClick={()=>{setActiveHeart (!activeHeart); handleDelete (favorites.id)}}>
         {activeHeart?(
           <FavoriteIcon className='fav'/>
         ):(<FavoriteIcon/>
         )}
       </ IconButton>

      {/* <button type="submit" onClick={() => {handleDelete(favorites.id) }}>remove</button> */}
       
       </div>
       </div>
            
            </div>
                )  
                
 {/* <SingleContent>




<img 
      
   className="poster"
     src={favorites.poster}
       alt={favorites.title}
    /> 

<b className="title">{favorites.title}</b>
      <span className="subTitle">
        {favorites.media_type}
        <span className="subTitle">{favorites.vote_average}</span>
      </span>
      <button type="submit" onClick={() => {handleDelete(favorites.id) }}>remove</button>
     

      </SingleContent>  */}
                   
    
           
            })
  }
    
        </div>
        </div>
                )
            }
            
          
    
 export default Add


 
// type="text"
// name="title"
// value={details.title}
// onChange={(e) =>
//   setDetails({ ...details, title: e.target.value })