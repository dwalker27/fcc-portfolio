function cashInDrawer(change, drawer) {
  let totalChange = 0;
  for (let key in drawer) {
    totalChange += drawer[key][1];
  }
  return (totalChange != change);
}

function checkCashRegister(price, cash, cid) {
  let billValue = { "PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100 };
  let change = {};
  let changeArray = [];
  // Here is your change, ma'am.
  let totalChange = cash - price;
  if (totalChange < 0) {
    change.status = "INSUFFICIENT_FUNDS";
    change.change = [];
  }
  else {
    for (let i = cid.length - 1; i >= 0; i--) {
      totalChange = Math.round(totalChange * 100) / 100;
      let bill = Math.floor(totalChange / billValue[cid[i][0]]) * billValue[cid[i][0]];
      bill = (bill > cid[i][1]) ? cid[i][1] : bill;
      totalChange -= bill;
      if (bill > 0) { changeArray.push([cid[i][0], bill]); }
    }

    if (totalChange != 0) {
      change.status = "INSUFFICIENT_FUNDS";
      change.change = [];
    }
    else if (cashInDrawer(cash - price, cid)) {
      change.status = "OPEN";
      change.change = changeArray;
    }
    else {
      change.status = "CLOSED";
      change.change = cid;
    }
  }
  return change;
}
