import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SimpleBottomNavigation from "./components/MainNav";
import {useState} from 'react';
import { Container } from "@material-ui/core";
import Bibliotheque from "./pages/Bibliotheque/Bibliotheque";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/TV/Series";
import Add from "./pages/ADD/Add";
import Search from "./pages/Search/Search";
import Admin from "./pages/Admin";
import SigneUp from "./users/SignUp";






function App() {

  const [favoriteMovie, setFavoriteMovie] = useState([])
  const getFavoriteMovie= (e)=>{
   favoriteMovie.push(e)
   console.log(favoriteMovie)
   }
  //  const removeFavorite=(c)=>{
  //   let index=favoriteMovie.indexOf(c)
  //   favoriteMovie.splice(index,1)
  //   setFavoriteMovie(favoriteMovie)
  //   console.log(favoriteMovie)
  //   }

  return (

    
    <Router>

      <Header />
      <div className="app">
      
        <Container>
        
          <Switch>
            <Route path="/" exact > <Bibliotheque getFavoriteMovie={getFavoriteMovie}/> </Route>
            <Route path="/Movies"  component={Movies}/>
            <Route path="/Series"  component={Series}/>
            <Route path="/Search"  component={Search}/>
            < Route path="/Admin"  component={Admin}/>
           
            < Route path="/SigneUp" component={SigneUp}/>
            <Route path="/Add" ><Add favoriteMovie={favoriteMovie} /></Route>
           </Switch>
           
        </Container>
      
      </div>
      <SimpleBottomNavigation />
      
    </Router>
     
    
   
    
  );
}

export default App;




