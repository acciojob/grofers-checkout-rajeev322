const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
   
  const priceElements = document.querySelectorAll(".price");

  let total = 0;

  priceElements.forEach((el) => {
    const price = parseFloat(el.textContent);
    if (!isNaN(price)) {
      total += price;
    }
  });

  const table = document.querySelector("table");


  const existingTotalRow = document.querySelector(".total-row");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Create new total row
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");

  // Create one cell for total
  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2");
  totalCell.textContent = `Total: Rs ${total}`;

  // Append cell to row, and row to table
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

