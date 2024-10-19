console.log(`test`);

const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];


//grabs the price on the html page and converts into an array
const tableList = document.querySelectorAll(`.contractor`);

const contractorArr = [...tableList];
console.log(contractorArr);

const priceArray = [];

contractorArr.forEach((contractor, index) => {

  const price = contractor.querySelector('.cPrice');
  const priceString = price.innerText; // or innerText, depending on what you need
  console.log(`Contractor ${index + 1}: ${priceString}`);
  const priceValue = Number(priceString.substr(1));
  console.log(priceValue);

  priceArray.push(priceValue);

});




//takes the current priceArray and finds the average
let average = 0;
let total = 0;

for( let i = 0; i < priceArray.length; i++ ) {

  total = total + priceArray[i];
  average = total / ( i + 1 );
}


const averagePrice = document.querySelector(`#average-price`);
averagePrice.innerText = average;

console.log(``);
console.log(`average: ${average}`);
console.log(``);




// priceArray.push(price);

// for( let i = 0; i < priceArray.length; i++ ) {

//   total = total + priceArray[i];
//   average = total / ( i + 1 );
// }
// console.log(`average: ${average}`);




let index = 0;


const intervalId = setInterval(() => {
  console.log(`index = ${index}`);
  console.log(`freelancers length = ${freelancers.length}`)

  const table = document.querySelector(`table`);
  const name = freelancers[index].name;
  const occupation = freelancers[index].occupation;
  const price = freelancers[index].price;
  
  const contractor = document.createElement(`tr`);
  const contractorName = document.createElement(`td`);
  const contractorOccupation = document.createElement(`td`);
  const contractorPrice = document.createElement(`td`);

  contractorName.innerText = name;
  contractorOccupation.innerText = occupation;
  contractorPrice.innerText = price;

  contractor.append(contractorName);
  contractor.append(contractorOccupation);
  contractor.append(contractorPrice);
  contractor.classList.add(`contractor`);

  table.append(contractor);


  const contractors = document.querySelectorAll(`.contractor`);
  console.log(`contractors: `, contractors);
  console.log(contractors.length);
  console.log(``);
  console.log(``);




priceArray.push(price);
console.log(priceArray);

for( let i = contractors.length - 1; i < priceArray.length; i++ ) {


  total = total + priceArray[i];
  average = (total / ( i + 1 )).toFixed(2);
}

console.log(`average: ${average}`);

averagePrice.innerText = average;






  if(index >= freelancers.length - 1) {
    clearInterval(intervalId);
  } else {
    index++;
  }
}, 3000);

