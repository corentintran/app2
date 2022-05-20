import React from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  const countriesSelect = document.getElementById("countries");

  props.countriesToAdd.map((countryToAdd) => {
    if (countriesSelect !== null) {
      var optionToAdd;
      optionToAdd = document.createElement("option");
      optionToAdd.text = countryToAdd;
      optionToAdd.value = countryToAdd;
      let test = false;

      //check if the courntry is not already an option

      [].map.call(countriesSelect, (countrySelect) => {
        if (countrySelect.value === optionToAdd.value) {
          test = true;
        }
      });
      if (!test) {
        countriesSelect.add(optionToAdd);
      }
    }
  });

  return (
    <div className="ResearchBar">
      <h2>Country: </h2>
      <select
        name="countries"
        id="countries"
        onChange={(event) => {
          props.onChange(event.target.value);
        }}
      ></select>
    </div>
  );
}

//<h2>Populated within: </h2>
//<select name= "radius" id="radius">
//</select>
