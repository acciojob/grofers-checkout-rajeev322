const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  // Select all elements with class 'price'
const priceElements = document.querySelectorAll(".price");

let total = 0;

// Sum all prices
priceElements.forEach(priceEl => {
  total += parseFloat(priceEl.textContent);
});

// Create a new row for total
const table = document.querySelector("table"); // selects your table
const totalRow = document.createElement("tr");

// Optionally, add a class for styling
totalRow.classList.add("total-row");

// Create a single cell spanning both columns
const totalCell = document.createElement("td");
totalCell.setAttribute("colspan", 2);
totalCell.textContent = "Total: Rs " + total;

// Append the cell to the row, then append the row to the table
totalRow.appendChild(totalCell);
table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

