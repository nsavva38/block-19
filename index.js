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


const tableList = document.querySelectorAll(`.contractor`);

// const contractorArr = [...tableList];
// console.log(contractorArr);


let i = 0;


const intervalId = setInterval(() => {
  console.log(`i = ${i}`);
  console.log(`freelancers length = ${freelancers.length}`)
  const table = document.querySelector(`table`);
  const name = freelancers[i].name;
  const occupation = freelancers[i].occupation;
  const price = freelancers[i].price;
  
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
  console.log(`interval`);


  const contractors = document.querySelectorAll(`.contractor`);
  console.log(`contractors: `, contractors);
  console.log(contractors.length);

  if(i >= freelancers.length - 1) {
    clearInterval(intervalId);
  } else {
    i++;
  }
}, 3000);

