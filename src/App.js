import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./Components/header"
import Index from "./Components/index"
import Comentarios from "./Components/comentarios"
import Causas from "./Components/causas"
function App() {
  return (
    <Router>
      <Header/>
      <div className="Page">
      <Route path="/" exact component={Index} />
      <Route path="/comentarios" component={Comentarios}/>
      <Route path="/causas" component={Causas}/>
      </div>
    </Router>
  );
}

export default App;
