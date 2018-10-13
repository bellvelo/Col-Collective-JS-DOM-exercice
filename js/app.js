
// const appendDataToTable = function (newTable, climbElement, distanceElement, gradientElement){
//   newTable.appendChild(climbElement)
//   // newTable.appendChild(distanceElement)
//   // newTable.appendChild(gradientElement)
//
// const tableContents = document.querySelector('#climb');
// tableContents.appendChild(newTable)
// }

const appendFirstCell = function (newCellOne, climbElement){
  newCellOne.appendChild(climbElement)
const firstCell = document.querySelector('.climb');
firstCell.appendChild(newCellOne)
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

const createNewRow = function(climb, distance, gradient){
  const newCellOne = document.createElement('tr');
  const newCellTwo = document.createElement('tr');
  const newCellThree = document.createElement('tr');
  const climbElement = document.createElement('td')
  climbElement.textContent = climb;
  const distanceElement = document.createElement('td')
  distanceElement.textContent = distance;
  const gradientElement = document.createElement('td')
  gradientElement.textContent = gradient;
  appendFirstCell(newCellOne, climbElement);
  appendSecondCell(newCellTwo, distanceElement);
  appendThirdCell(newCellThree, gradientElement);
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
  const climb = event.target.climb.value;
  const distance = event.target.distance.value;
  const gradient = event.target.gradient.value;
  // debugger
  createNewRow(climb, distance, gradient);

  const form = event.target;
  form.reset();
}

document.addEventListener('DOMContentLoaded', () => {
  // console.log("JavaScript!");
const form = document.querySelector('#form-input');
// debugger
form.addEventListener('submit', handleSubmit);
})
