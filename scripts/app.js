
"use strict"

window.onload = () => {
const locationBtn = document.getElementById("locationBtn");
const searchState = document.getElementById("searchState");
const typeBtn = document.getElementById("typeBtn")
const searchType = document.getElementById("searchType")

searchState.style.display = "block";
searchLocation()

locationBtn.onclick = () => {
searchState.style.display = "block";
searchType.style.display = "none";

searchLocation()
}

typeBtn.onclick = () => {
searchType.style.display = "block";
searchState.style.display = "none";

searchParkType()
}
}

function searchLocation() {
const locationDropdown = document.getElementById("locationDropdown");
const parkDisplay1 = document.getElementById("parkDisplay1");
const locationSubmitBtn = document.getElementById("locationSubmitBtn");


for (const locations of locationsArray) {
const option = new Option(locations, locations);
locationDropdown.add(option);
}

locationSubmitBtn.onclick = () => {
const selectedIndex = locationDropdown.selectedIndex
const selectedLocation = locationDropdown[selectedIndex].value

parkDisplay1.textContent = "";

for (let i = 0; i < nationalParksArray.length; i++) {
  const park = nationalParksArray[i];
  const phoneNumber = park.Phone === 0 ? "" : `<h6 class="card-subtitle mb-2 text-body-secondary">Phone: ${park.Phone}</h6>`;
  const faxNumber = park.Fax === 0 ? "" : `<h6 class="card-subtitle mb-2 text-body-secondary">Fax: ${park.Fax}</h6>`;
  const visitSite = park.Visit === 0 ? "" : '<h6 class="card-subtitle mb-2 text-body-secondary">For more information,<br><a href=${park.Visit}> visit their website!</a></h6>';

  if (park.State == selectedLocation) {
  const parkInfo = 
`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${park.LocationName}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Address: ${park.Address} ${park.City}, ${park.State} ${park.ZipCode}</h6>
    ${phoneNumber}
    ${faxNumber}
    ${visitSite}
  </div>
</div>`;
parkDisplay1.innerHTML += parkInfo;
}}
}}

function searchParkType() {
const parkTypeDropdown = document.getElementById("parkTypeDropdown");
const parkDisplay2 = document.getElementById("parkDisplay2");
const parkSubmitBtn = document.getElementById("parkSubmitBtn");


for (const parkType of parkTypesArray) {
const option = new Option(parkType, parkType);
parkTypeDropdown.add(option);
}

parkSubmitBtn.onclick = () => {

parkDisplay2.textContent = "";

for (let i = 0; i < nationalParksArray.length; i++) {
  const park = nationalParksArray[i]
  const phoneNumber = park.Phone === 0 ? "" : `<h6 class="card-subtitle mb-2 text-body-secondary">Phone: ${park.Phone}</h6>`;
  const faxNumber = park.Fax === 0 ? "" : `<h6 class="card-subtitle mb-2 text-body-secondary">Fax: ${park.Fax}</h6>`;
  const visitSite = park.Visit === 0 ? "" : '<h6 class="card-subtitle mb-2 text-body-secondary">For more information,<br><a href="${park.Visit}"> visit their website!</a></h6>';

if (park.LocationName.includes(parkTypeDropdown.value)) {
  const parkInfo = 
  `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${park.LocationName}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Address: ${park.Address} ${park.City}, ${park.State} ${park.ZipCode}</h6>
    ${phoneNumber}
    ${faxNumber}
    ${visitSite}
  </div>
</div>`;
parkDisplay2.innerHTML += parkInfo;
}}
}}