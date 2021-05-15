import { BrowserRouter, Route, Switch } from "react-router-dom";
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


function App() {

  const [favoriteMovie, setFavoriteMovie] = useState([])
  const getFavoriteMovie= (e)=>{
   favoriteMovie.push(e)
   console.log(favoriteMovie)
   }

  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" exact > <Bibliotheque getFavoriteMovie={getFavoriteMovie}/> </Route>
            <Route path="/Movies"  component={Movies}/>
            <Route path="/Series" component={Series}/>
            <Route path="/Search" component={Search}/>
   
            <Route path="/Add" ><Add favoriteMovie={favoriteMovie} /></Route>
           </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;




