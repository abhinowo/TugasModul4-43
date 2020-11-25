import React , { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';

import Counter from "./learn-useState/Counter";
import Effect from "./learn-useEffect/Index";
import Context from "./learn-useContext/Index";
import Memo from "./learn-useMemo/Memo";

// import React from "react";
// import ReactDOM from "react-dom";
const useDelayedMessage = (msg, delay) => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setMessage(msg);
    }, delay);
  });
  React.useDebugValue(message ? "Message Set" : "Message not set");
  return message;
};

function App() {
  const delayedMessage = useDelayedMessage("TEST DELAYED MESSAGE", 2000);
  const [i, setI] = useState(0);

function onClickHandle(){
  setI(i+1)
}
const memoChild = useMemo(()=> {
  return <Memo></Memo>
},[i]);

  return (
    
    <Router>
      <div>{delayedMessage}</div>
      <div className="App-header">
        <nav className="NavBar">
          <ul className="ul">
            <li className="li">
              <Link to="/">Use State </Link>
            </li>
            <li className="li">
              <Link to="/effect">Use Effect</Link>
            </li>
            <li className="li">
              <Link to="/context">Use Context</Link>
            </li>
          </ul>
        </nav>
        <h3> use memo </h3>
        <h2>i: {i}</h2>
        <button onClick={onClickHandle}>Increment I</button>
        <h3>normal render</h3>
        <Memo></Memo>
        <h3> Memo Render</h3>
        {memoChild}
        <Switch>
          <Route path="/" exact component= {Counter} />
          <Route path="/effect" exact component ={Effect}/>
          <Route path="/context" exact component ={Context} />
        </Switch>       
    </div>
    </Router>
  );
}

export default App;
