const form = document.getElementById("add-property-form");
const CITIES = ["Vilnius", "Kaunas", "Klaipeda", "Šiauliai", "Panevėžys"];

CITIES.forEach((city) => {
  const addCity = document.getElementById("saleCities");
  const option = document.createElement("option");
  option.setAttribute("value", city);
  option.innerText = city;
  addCity.append(option);
});

//further your code goes below
