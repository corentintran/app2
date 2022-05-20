import React from "react";
import Navigation from "../component/Navigation";
import SearchBar from "../component/SearchBar";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./VolcanoList.css";

export default function Volcan() {
  const navigate = useNavigate();

  //  RÉCUPÉRATION DES DONNÉES DE L'API

  const [Volcan, SetVolcan] = useState([]);

  const columns = [
    {
      headerName: "Name",
      field: "name"
    },
    {
      headerName: "Region",
      field: "region"
    },
    {
      headerName: "Subregion",
      field: "subregion"
    }
  ];

  const getVolcanoData = function () {
    fetch("http://sefdb02.qut.edu.au:3001/volcanoes?country=" + Country)
      .then((res) => res.json())
      .then((res) => SetVolcan(res))
      .then((data) =>
        data.map((volcan) => {
          return {
            name: volcan.name,
            region: volcan.region,
            subregion: volcan.subregion,
            id: volcan.id
          };
        })
      )
      .then((volcans) => SetVolcan(volcans));
  };

  // Research Bar

  const [Country, SetCountry] = useState({});
  const [CountryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch("http://sefdb02.qut.edu.au:3001/countries")
      .then((res) => res.json())
      .then((country) => setCountryData(country));
  }, []);

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "500px",
        width: "600px"
      }}
    >
      <Navigation />
      <div className="Research">
        <SearchBar countriesToAdd={CountryData} onChange={SetCountry} />
        <button onClick={getVolcanoData}>Search</button>
      </div>

      <AgGridReact
        columnDefs={columns}
        rowData={Volcan}
        pagination={true}
        onRowClicked={(row) =>
          navigate("/Volcano?name=" + row.data.name, {
            state: { id: row.data.id }
          })
        }
      />
    </div>
  );
}
