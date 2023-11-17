"use strict"

const mtnDropdown = document.getElementById("mtnDropdown"); 
const mtnDisplay = document.getElementById("mtnDisplay"); 
const mtnBtn = document.getElementById("mtnBtn"); 

window.onload = () => {
searchMountain()
}

function searchMountain() {
    
for (const mountains of mountainsArray) {
    const option = new Option(mountains.name, mountains.name);
    mtnDropdown.add(option);
}
}

mtnBtn.onclick = () => {
const selectedIndex = mtnDropdown.selectedIndex
const selectedMtn = mtnDropdown[selectedIndex].value

mtnDisplay.textContent = "";
    
for (let i = 0; i < mountainsArray.length; i++) {
    const mtn = mountainsArray[i];
if (selectedMtn == mtn.name) {
    mtnDisplay.innerHTML = `
    <div class="card mb-3">
    <div class="row g-0">
    <div class="col-7">
    <img src="images/${mtn.img}" class="img-fluid rounded-start" alt="..." style="width: 1000px;">
    </div>
      <div class="col-5">
        <div class="card-body">
          <h5 class="card-title">${mtn.name}</h5>
          <p class="card-text">${mtn.desc}</p>
          <p class="card-text"><small class="text-body-secondary">Elevation: ${mtn.elevation}</small></p>
          <p class="card-text"><small class="text-body-secondary">Latitude: ${mtn.coords.lat}   Longitude: ${mtn.coords.lng}</small></p>
        </div>
      </div>
    </div>
  </div>`
}}}