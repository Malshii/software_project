import React from "react";
import AddPatient from "./components/AddPatient";
import Header from "./components/Header";
import AllPatients from "./components/AllPatients";
//import {BrowserRouter as Router,Route} from "react-router-dom";

function App() {
  return (
    //<Router>
      <div>
        <Header/>
        <AddPatient/>
        <AllPatients/>                 
      </div>   
    //</Router>         
  );
}

export default App;
