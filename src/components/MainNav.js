import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import {useHistory} from 'react-router-dom';



const useStyles = makeStyles({
  root: {
    width: '100%',
    position:'fixed',
    bottom:0,
    backgroundColor:"#2d313a",
    zIndex:100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history=useHistory();
  const [favourites, setFavourites]=useState([]);
  
  useEffect(()=>{
if(value === 0)
history.push('/');
else if(value===1)history.push('/movies');
else if(value===2)history.push('/series');
else if(value===3)history.push('/search');
else if(value===4)history.push('/add');

},[value,history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction 
      style={{color:"white"}} 
      label="Bibliotheque" 
      icon={<VideoLibraryIcon/>} 
      />
      <BottomNavigationAction
      style={{color:"white"}} 
      label="Movies" 
      icon={<LocalMoviesIcon  
      />} />
      
      <BottomNavigationAction
      style={{color:"white"}} 
      label=" Series" 
      icon={<LiveTvIcon 
      />} />
      <BottomNavigationAction 
      style={{color:"white"}}
      label="Search" 
      icon={<YoutubeSearchedForIcon/>} 
      />
<BottomNavigationAction 
      style={{color:"white"}}
      label="Favourites" 
      icon={< FavoriteIcon  />} 
      />


    </BottomNavigation>
  );
}