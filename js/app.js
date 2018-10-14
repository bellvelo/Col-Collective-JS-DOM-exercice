
const appendFirstCell = function (newCellOne, climbElement){
  newCellOne.appendChild(climbElement)
const firstCell = document.querySelector('.climb');
firstCell.appendChild(newCellOne)
// debugger
}
const appendSecondCell = function (newCellTwo, distanceElement){
  newCellTwo.appendChild(distanceElement)
const secondCell = document.querySelector('.distance');
secondCell.appendChild(newCellTwo)
}
const appendThirdCell = function (newCellThree, gradientElement){
  newCellThree.appendChild(gradientElement)
const thirdCell = document.querySelector('.gradient');
thirdCell.appendChild(newCellThree)
}
const appendFourthCell = function (newCellFour, tourElement){
  newCellFour.appendChild(tourElement)
const fourthCell = document.querySelector('.tour');
fourthCell.appendChild(newCellFour)
}
// const appendFifthCell = function (newCellFive, countryElement){
//   newCellFive.appendChild(countryElement)
// const fifthCell = document.querySelector('.country');
// fifthCell.appendChild(newCellFive)
// }

const createNewRow = function(tour, climb, distance, gradient){
  const newCellOne = document.createElement('tr');
  const newCellTwo = document.createElement('tr');
  const newCellThree = document.createElement('tr');
  const newCellFour = document.createElement('tr');
  // const newCellFive = document.createElement('tr');

  const climbElement = document.createElement('td')
  climbElement.textContent = climb;
  const distanceElement = document.createElement('td')
  distanceElement.textContent = distance;
  const gradientElement = document.createElement('td')
  gradientElement.textContent = gradient;
  const tourElement = document.createElement('td')
  tourElement.textContent = tour;
  // const countryElement = document.createElement('td')
  // tourElement.textContent = country;

  appendFirstCell(newCellOne, climbElement);
  appendSecondCell(newCellTwo, distanceElement);
  appendThirdCell(newCellThree, gradientElement);
  appendFourthCell(newCellFour, tourElement);
  // appendFifthCell(newCellFive, countryElement);
}

// const createNewRow = function(climb, distance, gradient){
//   const newTable = document.createElement('tr');
//   const climbElement = document.createElement('td')
//   climbElement.textContent = climb;
//   const distanceElement = document.createElement('td')
//   distanceElement.textContent = distance;
//   const gradientElement = document.createElement('td')
//   gradientElement.textContent = gradient;
//   appendDataToTable(newTable, climbElement, distanceElement, gradientElement);
// }

const handleSubmit = function(event){
  event.preventDefault();
  console.log("Javascrpt!");
  const tour = event.target.options.value;
  const climb = event.target.climb.value;
  const distance = event.target.distance.value;
  const gradient = event.target.gradient.value;
  // const country = event.target.country.value;
  // debugger
  // console.dir(event)
  createNewRow(tour, climb, distance, gradient);

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
