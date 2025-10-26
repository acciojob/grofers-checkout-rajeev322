const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
   // Select all price cells
  const priceElements = document.querySelectorAll(".price");
  let total = 0;

  // Calculate total
  priceElements.forEach((cell) => {
    // Convert text to number
    const price = parseFloat(cell.textContent.trim());
    if (!isNaN(price)) {
      total += price;
    }
  });

  // Get table reference
  const table = document.querySelector("table");

  // Remove existing total row if it exists
  const oldRow = document.querySelector(".total-row");
  if (oldRow) oldRow.remove();

  // Create new total row
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");

  // Create single cell with id="ans"
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.id = "ans"; // ✅ Cypress expects this ID
  totalCell.textContent = total; // ✅ total value only, e.g., 333

  // Append cell to row, and row to table
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

