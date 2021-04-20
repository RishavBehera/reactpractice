import './App.css';

import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import {Route, Switch} from "react-router-dom" 

function App() {
  return (
    <div className="App">    
      <Header/>
      <Switch>
        <Route path="/todos" component={Home}/>
        <Route path="/Settings" component={Home}/>
        <Route path="/logout" component={Home}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
