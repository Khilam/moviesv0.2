import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SimpleBottomNavigation from "./components/MainNav";

import { Container } from "@material-ui/core";
import Bibliotheque from "./pages/Bibliotheque/Bibliotheque";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/TV/Series";
import Add from "./pages/ADD/Add";
import Search from "./pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Bibliotheque} exact />
            <Route path="/Movies" component={Movies}/>
            <Route path="/Series" component={Series}/>
            <Route path="/Search" component={Search}/>
            <Route path="/Add" component={Add}/>
           </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;




