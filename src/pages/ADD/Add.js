import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";

const Add = ({content}) => {
   
 


    
  
   
    return (
        <div>
            <span className="pageTiltle"> My Favorite List</span>
            <div className="trending">
                {content.map(c => (
                    <SingleContent
                      key={c.id}
                      id={c.id}
                      poster={c.poster_path}
                      title={c.title || c.name}
                      date={c.first_air_date || c.release_date}
                      media_type={c.media_type}
                      vote_average={c.vote_average}
           >
                
               
                </SingleContent>
            ))}
             </div>
        
        </div>
    )}

    
export default Add
