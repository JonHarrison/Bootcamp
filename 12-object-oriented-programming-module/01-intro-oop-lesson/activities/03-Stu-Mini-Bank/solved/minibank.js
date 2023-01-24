function MiniBank(balance) {
  this.balance = balance;
  this.statement = [ balance ];
  this.setBalance = (value) => { this.balance = value; }
  this.updateStatement = (value) => { this.statement.push(value); }
  this.getStatement = () => { return this.statement; }
  this.printStatement = () => { console.log('Statement:'); for (entry of this.statement) { console.log(entry); } }  
  this.getBalance = () => {
    return this.balance;
  };
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
  this.deposit = (funds) => {
    if (typeof funds !== 'number' || funds <= 0) {
      throw new Error('Please deposit a positive number');
    }
    this.updateStatement(funds);
    // const sum = this.statement.reduce((partialSum, a) => partialSum + a, 0);
    this.setBalance(this.getBalance() + funds);
    console.log(`Deposited: ${funds}`);
  }
  this.withdraw = (funds) => {
    if (typeof funds !== 'number' || funds <= 0) {
      throw new Error('Please withdraw a positive number');
    }
    if ( (this.getBalance() - funds) < 0) {
      throw new Error('Sorry, you have insufficient funds');
    }
    this.updateStatement(-funds);
    // const sum = this.statement.reduce((partialSum, a) => partialSum + a, 0);
    this.setBalance(this.getBalance() - funds);
    console.log(`Withdrew: ${funds}`);
  }
}

const bank = new MiniBank(0);
bank.printBalance();
bank.deposit(100);
bank.printBalance();
bank.withdraw(50);
bank.printBalance();
