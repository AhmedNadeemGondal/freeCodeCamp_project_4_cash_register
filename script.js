let price = 19.5;
let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];
const denominators = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100],
];

const purchase = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");
const parseFixed = (value, decimals = 2) => parseFloat(value.toFixed(decimals));
const _status = {
  OPEN: "OPEN",
  CLOSED: "CLOSED",
  INSUFFICIENT_FUNDS: "INSUFFICIENT_FUNDS",
};

const cidTotal = () => {
  return cid.reduce((a, b) => a + b[1], 0).toFixed(2);
};

purchase.addEventListener("click", () => {
  const cash = parseFloat(document.getElementById("cash").value);
  const change = parseFixed(cash - price);
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cash === price) {
    changeDue.innerText = "No change due - customer paid with exact cash";
  } else {
    changeDue.innerText = cidDeduct(change);
  }
  changeDue.classList.add("active");
});

const cidDeduct = (change) => {
  let remain_change = change;
  let output = ``;

  for (let i = cid.length - 1; i >= 0; i--) {
    let string_out = ``;
    let deducted = 0;

    // Use while loop to deduct the change
    while (remain_change >= denominators[i][1] && cid[i][1] > 0) {
      remain_change = parseFixed(remain_change - denominators[i][1]);
      cid[i][1] = parseFixed(cid[i][1] - denominators[i][1]);
      deducted = parseFixed(deducted + denominators[i][1]);

      // If there's no more currency left to give, break the loop
      if (cid[i][1] <= 0) {
        break;
      }
    }

    // If we deducted any amount, prepare the output string
    if (deducted > 0) {
      string_out += `${denominators[i][0]}: $${deducted} `;
    }

    output += string_out;
  }

  if (remain_change === 0 && cidTotal() > 0) {
    output = `Status: ${_status.OPEN} ${output}`;
  } else if (remain_change === 0 && parseInt(cidTotal()) === 0) {
    output = `Status: ${_status.CLOSED} ${output}`;
  } else if (remain_change > 0) {
    output = `Status: ${_status.INSUFFICIENT_FUNDS}`;
  }

  return output.trimEnd();
};
