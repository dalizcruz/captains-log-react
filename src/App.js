import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Logs from './Components/Logs';
import Home from './Components/Home';

import NavBar from "./Components/NavBar";

import { apiURL } from "./util/apiURL";
const API = apiURL();

function App() {

  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    let res;
    try {
      res = await axios.get(`${API}/logs`)
      console.log(res.data)
      setLogs(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchLogs();
  })

  return (
    <div>
      <Router>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route path="/logs/:index" component={Logs}  logs={logs}/>
          {/* <Route exact path="/logs" />
        <Route path="/logs/new"/> */}
        </Switch>
      </main>
      
      
      </Router>
    </div>
  )
}

export default App;
