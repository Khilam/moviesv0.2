import axios from "axios";

import { useEffect, useState } from "react";
import SingleContent from "../components/SingleContent/SingleContent";
import CustomPagination from "../components/Pagination/CustomPagination";
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { img_300, unavailable } from "../config/config";
import Rater from 'react-rater';
import firebase from '../lib/firebase'

const Admin = ({getFavoriteMovie }) => {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [adminChoice, setAdminChoice] = useState([]);
 
  const fetchBibliotheque = async () => {
    const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MY_KEY}&page=${page}`
            );

            setContent(data.results);
          }
        
          useEffect(() => {
            window.scroll(0, 0);
            fetchBibliotheque();
            //  eslint-disable-next-line
          }, [page]);

useEffect(() => {
  const dataArr = []
       const res = firebase.firestore().collection('AdminChoices');
       res.get().then(data => {
           data.docs.map((doc) => {
               const { media_type, title, vote_average, poster, date  } = doc.data()
               dataArr.push({id: doc.id,
                 media_type, title, vote_average, poster, date , 
               })
           })
           setAdminChoice(dataArr)
       })
}, [])
         
      
   console.log(adminChoice)

   const handleDelete = (id) => {
   
      firebase.firestore().collection('AdminChoices').doc(id).delete().then(() => {
          console.log("Document successfully deleted!");
          
      }).catch((error) => {
          console.error("Error removing document: ", error);
      });
      // const setFavorites=[...favorites];
      
      console.log(id)
      
  }
//    const handleDelete = (id) => {
   
//     firebase.firestore().collection('AdminChoices').doc(id).delete().then(() => {
//         console.log("Document successfully deleted!");
        
//     }).catch((error) => {
//         console.error("Error removing document: ", error);
//     });
//     // const setFavorites=[...favorites];
    
//     console.log(id)
    
// }
const [activeHeart, setActiveHeart] = useState (true);
          return (
<div>  <span className="pageTitle"> Admin Page</span>
        <div className='firebase'>
           
            {adminChoice.map((adminChoices, index)=>{
              
                return (
                  <div className='media-firebase'>
                 <div key={index}> 


               
      
      <img
      
        className="poster"
        src={adminChoices.poster ? `${img_300}${adminChoices.poster}` : unavailable}
        alt={adminChoices.title}
      />
       
      <b className="title">{adminChoices.title}</b>
      <span className="subTitle">
        {adminChoices.media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{adminChoices.date}</span>
      </span>
      <div className='row icons'>
    
      <Rater interactive={false} total={5} rating={adminChoices.vote_average/2} />

      < IconButton onClick={()=>{setActiveHeart (!activeHeart); handleDelete (adminChoices.id)}}> 
          {activeHeart?(
           <FavoriteIcon className='fav'/>
         ):(<FavoriteIcon/>
         )}
       </ IconButton>
       

      {/* <button type="submit" onClick={() => {handleDelete(adminChoices.id) }}>remove</button> */}
       
       </div>
       </div>
                
            </div>
                )
                
 
                   
    
           
            
            
    
    }
            )}
           
        </div>
        </div>
          
    
          
          )}    

export default Admin;
