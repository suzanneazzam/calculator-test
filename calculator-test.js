it("should calculate the monthly rate correctly", function () {
  let values = {
    amount: 1000,
    years: 10,
    rate: 6,
  };
  expect(calculateMonthlyPayment(values)).toEqual("11.10");
});

it("should return a result with 2 decimal places", function () {
  let values = {
    amount: 15000,
    years: 5,
    rate: 2.9,
  };
  expect(calculateMonthlyPayment(values)).toEqual("268.86");
});

/// etc
