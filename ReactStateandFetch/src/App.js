import React, { useState, useEffect } from "react";
import CountryTable from "./CountryTable";
import './App.css';
import countryFacade from './countryFacade';

const App = (props) => {
  const [labels, setLabels] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getLabels = async () => {
      console.log("getLabels");
      try {
        const data = await countryFacade.getLabels();
        console.log("Labels", data);
        setLabels(data);
      } catch (e) {
        console.log("err", e);
      }
    }
    getLabels();
    const getCountries = async () => {
      console.log("getCountries");
      try {
        const data = await countryFacade.getCountries();
        console.log("Countries", data);
        setCountries(data);
      } catch (e) {
        console.log("err", e);
      }
    }
    getCountries();
  }, []);



  return (
    <div>
      <div className="App-header">
        <h2>React, State, Fetch</h2>
      </div>
      <div className="App-intro">
        <p>Your initial task is to fetch data from the server (see exercise for how to start it),
           and create a table below, with these data</p>
        <CountryTable
          labels={labels}
          countries={countries}
        />
      </div>
    </div>
  );
};


export default App;
