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

const randomFreelancers = [
  { name: "Harry Potter", price: 47, occupation: "seeker"},
  { name: "Ron Weasley", price: 31, occupation: "keeper"},
  { name: "Hermione Granger", price: 64, occupation: "nerd"},
];

console.log(`randomFreelancers length: ${randomFreelancers.length}`)
const randomNumber = Math.floor(Math.random() * randomFreelancers.length);
console.log(`randomNumber: ${randomNumber}`);

console.log(`new freelancer: ${randomFreelancers[randomNumber].name}`);

freelancers.push(randomFreelancers[randomNumber]);
const priceArray = [];


let index = 0;
let average = 0;
let total = 0;


const intervalId = setInterval(() => {
  console.log(`index = ${index}`);
  console.log(`freelancers length = ${freelancers.length}`)

  const table = document.querySelector(`table`);
  const name = freelancers[index].name;
  let occupation = freelancers[index].occupation;
  occupation = `${occupation[0].toUpperCase()}` + `${occupation.slice(1)}`;
  const price = freelancers[index].price;
  
  const contractor = document.createElement(`tr`);
  const contractorName = document.createElement(`td`);
  contractorName.classList.add(`name`);
  const contractorOccupation = document.createElement(`td`);
  contractorOccupation.classList.add(`occupation`);
  const contractorPrice = document.createElement(`td`);
  contractorPrice.classList.add(`price`);

  contractorName.innerText = name;
  contractorOccupation.innerText = occupation;
  contractorPrice.innerText = `$${price}`;

  contractor.append(contractorName);
  contractor.append(contractorOccupation);
  contractor.append(contractorPrice);
  contractor.classList.add(`contractor`);

  table.append(contractor);


  const contractors = document.querySelectorAll(`.contractor`);
  console.log(`contractors: `, contractors);
  console.log(`contractor length: ${contractors.length}`);
  console.log(``);
  console.log(``);




priceArray.push(price);
console.log(`priceArray length: ${priceArray.length}`);
console.log(`new priceArray: ${priceArray}`);

for( let i = contractors.length - 1; i < priceArray.length; i++ ) {

  console.log(`i: ${i}`);
  console.log(`priceArray[${i}]: ${priceArray[i]}`)
  total = total + priceArray[i];
  average = (total / ( i + 1 )).toFixed(2);
}

console.log(`average: ${average}`);

const averagePrice = document.querySelector(`#average-price`);
averagePrice.innerText = `The average starting price is $${average}`;



  if(index >= freelancers.length - 1) {
    clearInterval(intervalId);
  } else {
    index++;
  }
}, 1000);

