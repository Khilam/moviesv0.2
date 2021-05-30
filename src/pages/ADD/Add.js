import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import firebase from '../../lib/firebase'

const Add = ({favoriteMovie}) => {
   
 
    const [content, setContent] = useState([]);
    
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

   const handleDelete = (id) => {
    firebase.firestore().collection('favouritemovies').doc(id).delete().then(() => {
        console.log("Document successfully edi!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
    console.log(id)
}

    return (
        <div  className='media'>
            {fav.map((favorites, index)=>{
                return (
                 <div key={index}> 










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
     


                   

             </div>
                )})}
        </div>
                )
            }
            

    
export default Add
