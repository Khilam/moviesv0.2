import React from 'react'
import firebase from '../../lib/firebase'

const Dashboard = ({adminChoices}) => { 


    const [adminChoices, setAdminChoices] = useState([]);
    
    

    useEffect(() => {
   
       const dataArr = []
       const res = firebase.firestore().collection('Admin Choices');
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
  console.log(adminChoices)

    
   const [activeHeart, setActiveHeart] = useState (true);
   //  const [favorites, setFavorites] = useState([]);
    const handleDelete = (id) => {
    
     firebase.firestore().collection('Admin Choices').doc(id).delete().then(() => {
         console.log("Document successfully deleted!");
         
     }).catch((error) => {
         console.error("Error removing document: ", error);
     });
     // const setFavorites=[...favorites];
     
     console.log(id)
     
 }
 
 
     return (
       
         <div className='firebase'>
            
             {adminChoices.map((favorites, index)=>{
               
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
         {favorites.media_type === "tv" ? "TV Series" : "Movie"}
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
      
          
    )
}

export default Dashboard

















