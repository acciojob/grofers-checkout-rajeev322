const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const table = document.querySelector("table");
  const priceElements = document.querySelectorAll(".price");
  let total = 0;

  // Sum all prices
  priceElements.forEach(priceEl => {
    const value = parseFloat(priceEl.textContent);
    if (!isNaN(value)) total += value;
  });

  // Remove existing total row if it exists
  const existingTotalRow = document.querySelector(".total-row");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Create new total row
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");

  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", 2);
  totalCell.textContent = "Total: Rs " + total;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

