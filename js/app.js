// APPEND THE FORM DATA'S TO THE NEWLY CREATED DIV //
const appendDataToTable = function(newRow, climbElement, distanceElement, gradientElement, tourElement, countryElement){
  newRow.appendChild(tourElement)
  newRow.appendChild(countryElement)
  newRow.appendChild(climbElement)
  newRow.appendChild(distanceElement)
  newRow.appendChild(gradientElement)
  //  THEN ACCESS THE HTML DIV WE WANT TO UPDATE AND ASSIGN IT A VARIABLE //
  const newTable = document.querySelector('#table-input')
  // THEN ADD THE NEW ELEMENTS TO THE DIV AND THE DOM//
  newTable.appendChild(newRow)
  // const form = document.querySelector('#new-item-form');
  // form.reset() // another method to reset the form
}

const createNewRow = function(tour, climb, distance, gradient, country){
  const newRow = document.createElement('tr');

  const climbElement = document.createElement('td')
  climbElement.textContent = climb;
  const distanceElement = document.createElement('td')
  distanceElement.textContent = distance;
  const gradientElement = document.createElement('td')
  gradientElement.textContent = gradient;
  const tourElement = document.createElement('td')
  tourElement.textContent = tour;
  const countryElement = document.createElement('td')
  countryElement.textContent = country;

  appendDataToTable(newRow, climbElement, distanceElement, gradientElement, tourElement, countryElement)
}

const handleSubmit = function(event){
  event.preventDefault();
  console.log("Javascrpt!");
  const tour = event.target.options.value;
  const climb = event.target.climb.value;
  const distance = event.target.distance.value;
  const gradient = event.target.gradient.value;
  const country = event.target.country.value;
  // debugger
  console.log(event.target.country.value)
  createNewRow(tour, climb, distance, gradient, country);

  const form = event.target;
  form.reset();
}

const handleDelete = function(event){
  const climbTable = document.querySelector('#table-input');
  while(climbTable.firstChild){
    climbTable.removeChild(climbTable.firstChild);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // console.log("JavaScript!");
const form = document.querySelector('#form-input');
form.addEventListener('submit', handleSubmit);

const deleteButton = document.querySelector('#deleteAll');
deleteButton.addEventListener('click', handleDelete);
})
