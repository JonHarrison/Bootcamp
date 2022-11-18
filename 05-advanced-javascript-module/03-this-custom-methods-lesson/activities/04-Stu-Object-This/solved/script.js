console.log(this); // this has global scope

function helloThis() {
  console.log('Inside this function, this is ' + this); // this has global scope
}

var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10); // this has scope of the child object
  },
};

var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15); // this has scope of the investment object
    },
  },
};

helloThis();
child.ageTenYears();
investor.investment.investmentGrowth();
