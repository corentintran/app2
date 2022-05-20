import React from "react";

//Map
import { Map, Marker } from "pigeon-maps";

//ChartBar
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import "./VolcanoPage.css";

import { Button } from "reactstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Navigation from "../component/Navigation";
import { useLocation } from "react-router-dom";

export default function VolcanoPage() {
  const navigate = useNavigate();

  // Récupération de L'ID et du Nom

  const location = useLocation();
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");
  const id = location.state.id;

  // Récupération des données à partir de L'ID

  const [VolcanData, SetVolcanData] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token !== "null") {
      fetch("http://sefdb02.qut.edu.au:3001/volcano/" + id, {
        method: "GET",
        headers:
          token !== null
            ? {
                accept: "application/json",
                Authorization: "Bearer " + token
              }
            : {}
      })
        .then((res) => res.json())
        .then((res) => SetVolcanData(res))
        .then((data) =>
          data.map((volcandata) => {
            return {
              name: volcandata.name,
              country: volcandata.country,
              region: volcandata.region,
              subregion: volcandata.subregion,
              last_eruption: volcandata.last_eruption,
              summit: volcandata.summit,
              elevation: volcandata.elevation,
              latitude: volcandata.latitude,
              longitude: volcandata.longitude,
              population_5km: volcandata.population_5km,
              population_10km: volcandata.population_10km,
              population_30km: volcandata.population_30km,
              population_100km: volcandata.population_100km
            };
          })
        )
        .then((volcans) => SetVolcanData(volcans));
    } else {
      fetch("http://sefdb02.qut.edu.au:3001/volcano/" + id)
        .then((res) => res.json())
        .then((res) => SetVolcanData(res))
        .then((data) =>
          data.map((volcandata) => {
            return {
              name: volcandata.name,
              country: volcandata.country,
              region: volcandata.region,
              subregion: volcandata.subregion,
              last_eruption: volcandata.last_eruption,
              summit: volcandata.summit,
              elevation: volcandata.elevation,
              latitude: volcandata.latitude,
              longitude: volcandata.longitude
            };
          })
        )
        .then((volcans) => SetVolcanData(volcans));
    }
  }, []);

  const latitude = parseFloat(VolcanData.latitude);
  const longitude = parseFloat(VolcanData.longitude);

  if (token !== "null") {
    const options = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Population Density around the Volcano "
        }
      }
    };

    const labels = ["5km", "10km", "30km", "100km"];

    const data = {
      labels,
      datasets: [
        {
          label: "Population density",
          data: [
            VolcanData.population_5km,
            VolcanData.population_10km,
            VolcanData.population_30km,
            VolcanData.population_100km
          ],
          backgroundColor: "rgba(0, 150, 0, 0.5)"
        }
      ]
    };

    return (
      <div className="Container">
        <Navigation />
        <div className="Presentation">
          <h1>{name} </h1>

          <p> Country: {VolcanData.country}</p>
          <p> Region: {VolcanData.region}</p>
          <p> Subregion: {VolcanData.subregion}</p>
          <p> Last Eruption: {VolcanData.last_eruption}</p>
          <p> Summit: {VolcanData.summit}</p>
          <p> Elevation: {VolcanData.elevation}</p>

          <Button
            color="info"
            size="sm"
            className="mt-3"
            onClick={() => navigate("/VolcanoList")}
          >
            Back
          </Button>
        </div>

        <div className="Carte">
          <Map height={450} defaultCenter={[40, 18]} defaultZoom={1.5}>
            <Marker width={50} anchor={[latitude, longitude]} />
          </Map>
        </div>

        <Bar options={options} data={data} />
      </div>
    );
  } else {
    return (
      <div className="Container">
        <Navigation />
        <div className="Presentation">
          <h1>{name} </h1>

          <p> Country: {VolcanData.country}</p>
          <p> Region: {VolcanData.region}</p>
          <p> Subregion: {VolcanData.subregion}</p>
          <p> Last Eruption: {VolcanData.last_eruption}</p>
          <p> Summit: {VolcanData.summit}</p>
          <p> Elevation: {VolcanData.elevation}</p>

          <Button
            color="info"
            size="sm"
            className="mt-3"
            onClick={() => navigate("/VolcanoList")}
          >
            Back
          </Button>
        </div>

        <div className="Carte">
          <Map height={450} defaultCenter={[40, 18]} defaultZoom={1.5}>
            <Marker width={50} anchor={[latitude, longitude]} />
          </Map>
        </div>
      </div>
    );
  }
}
