import { Switch, Route } from "react-router-dom";
import Calculator from "./calculator";
import Home from "./home";
import Navbar from "./navbar";
import Quote from "./quote";

const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route component = {Home} exact path="/"/>
        <Route component = {Calculator} path="/calculator"/>
        <Route component = {Quote} path="/quote"/>
      </Switch>
    </>
  ) 
}

export default App;