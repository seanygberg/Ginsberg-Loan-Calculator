
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 100000, 
    years: 30, 
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('536.82');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 123, 
    years: 8, 
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('1.60');
});

it("should handle no amount", function() {
  const values = {
    amount: 0, 
    years: 8, 
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('0.00');
});

it("should handle no years", function() {
  const values = {
    amount: 10, 
    years: 0, 
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('Infinity');
});

it("should handle no rate", function() {
  const values = {
    amount: 10, 
    years: 8, 
    rate: 0
  };
  expect(calculateMonthlyPayment(values)).toEqual('NaN');
});

