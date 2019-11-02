import React, { useState, useEffect } from "react";
import CountryTable from "./CountryTable";
import './App.css';

const App = ({ factory }) => {
  const [labels, setLabels] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getLabels = async () => {
      console.log("getLabels");
      try {
        const data = await factory.getLabels();
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
        const data = await factory.getCountries();
        console.log("Countries", data);
        setCountries(data);
      } catch (e) {
        console.log("err", e);
      }
    }
    getCountries();
    console.log("refrezh")

  }, []);
  // useEffect(() => {
  //   setInterval(() => {
  //     const getLabels = async () => {
  //       console.log("getLabels");
  //       try {
  //         const data = await factory.getLabels();
  //         console.log("Labels", data);
  //         setLabels(data);
  //       } catch (e) {
  //         console.log("err", e);
  //       }
  //     }
  //     getLabels();
  //     const getCountries = async () => {
  //       console.log("getCountries");
  //       try {
  //         const data = await factory.getCountries();
  //         console.log("Countries", data);
  //         setCountries(data);
  //       } catch (e) {
  //         console.log("err", e);
  //       }
  //     }
  //     getCountries();
  //     console.log("refrezh")
  //   }, 3000);

  // }, []);



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
