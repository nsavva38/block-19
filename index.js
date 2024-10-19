
// array of freelancers
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

//array of new freelancers where one will be chosen randomly and added to the previous array
const randomFreelancers = [
  { name: "Harry Potter", price: 47, occupation: "seeker"},
  { name: "Ron Weasley", price: 31, occupation: "keeper"},
  { name: "Hermione Granger", price: 64, occupation: "nerd"},
];

const randomNumber = Math.floor(Math.random() * randomFreelancers.length);

freelancers.push(randomFreelancers[randomNumber]);


//initializing variables for the following interval function
let index = 0;
let average = 0;
let total = 0;
const priceArray = [];


const intervalId = setInterval(() => {
  
  //grabbing key/value pairs and putting them into variables
  const name = freelancers[index].name;
  let occupation = freelancers[index].occupation;
  occupation = `${occupation[0].toUpperCase()}` + `${occupation.slice(1)}`;
  const price = freelancers[index].price;
  
  //creating html elements, storing them into variables, and creating a class within that element
  const contractor = document.createElement(`tr`);

  const contractorName = document.createElement(`td`);
  contractorName.classList.add(`name`);
  const contractorOccupation = document.createElement(`td`);
  contractorOccupation.classList.add(`occupation`);
  const contractorPrice = document.createElement(`td`);
  contractorPrice.classList.add(`price`);


  //setting the inner text of the newly made elemnts equal to the keys/values
  contractorName.innerText = name;
  contractorOccupation.innerText = occupation;
  contractorPrice.innerText = `$${price}`;


  //appending each `td` element and their class into the `tr` element named `contractor`, 
  //and creating html class `contractor`
  contractor.append(contractorName);
  contractor.append(contractorOccupation);
  contractor.append(contractorPrice);
  contractor.classList.add(`contractor`);


  //grabbing the `table` html element and appending `contractor`
  const table = document.querySelector(`table`);
  table.append(contractor);


  //grabbing the length of the amount of `contractor` classed elements are on the html page, 
  //and pushing the `price` variable into `priceArray`
  const contractors = document.querySelectorAll(`.contractor`);
  priceArray.push(price);


  //looping through the `priceArray` to get the average cost of the freelancers
  //using the length/amount of contractors on html page minus 1 so `i` can begin at zero
  for( let i = contractors.length - 1; i < priceArray.length; i++ ) {

    total = total + priceArray[i];
    average = (total / ( i + 1 )).toFixed(2);
  }

  //grabbing the html element id'd with `average-price` and making the inner text
  const averagePrice = document.querySelector(`#average-price`);
  averagePrice.innerText = `The average starting price is $${average}`;


  //to break out of the interval function if index is greater than or equal to the
  //amount of freelancers minus 1
  if(index >= freelancers.length - 1) {
    clearInterval(intervalId);
  } else {
    index++;
  }
}, 1000);

