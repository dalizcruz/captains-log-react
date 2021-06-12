import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

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
      <NavBar logs={logs} />
      <main>
        <p>Captain's Log</p>
        <Switch>
          <Route path="/logs/:index" />
          {/* <Route exact path="/logs" />
        <Route path="/logs/new"/> */}
        </Switch>
      </main>
      
      
      </Router>
    </div>
  )
}

export default App;
