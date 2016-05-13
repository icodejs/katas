function tickets(peopleInLine) {
  let cashRegister = [];

  function giveCustomerChange(...args) {
    args.forEach(amount => {
      const i = cashRegister.indexOf(amount);
      if (i !== -1) cashRegister.splice(i, 1);
    });
  }

  function addMoneyToTill(amount) {
    cashRegister.push(amount);
  }

  function tillHasCorrectChange(amount, multiples = 1) {
    let DimominationMultiples = [];
    let i = -1;

    while ((i = cashRegister.indexOf(amount, i + 1)) !== -1) {
      DimominationMultiples.push(i);
    }
    return DimominationMultiples.length >= multiples;
  }

  function serveCustomer(payment) {
    switch (payment) {
    case 25:
      addMoneyToTill(payment);
      return true;
    case 50:
      if (cashRegister.length && tillHasCorrectChange(25)) {
        giveCustomerChange(25);
        addMoneyToTill(50);
        return true;
      }
      return false;
    case 100:
      if (cashRegister.length) {
        if (tillHasCorrectChange(50) && tillHasCorrectChange(25)) {
          giveCustomerChange(50, 25);
          return true;
        }
        else if (tillHasCorrectChange(25, 3)) {
          giveCustomerChange(25, 25, 25);
          return true;
        }
      }
      return false;
    default:
      return false;
    }
  }

  let hasChange = false;

  for (let i = 0; i < peopleInLine.length; i++) {
    hasChange = serveCustomer(peopleInLine[i]);
    if (!hasChange) return 'NO';
  }

  return 'YES';
}

export default tickets;
