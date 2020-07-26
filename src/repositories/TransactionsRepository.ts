/* eslint-disable no-return-assign */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    try{
     // console.log("foi")
      return this.transactions
    }
    catch{
      throw new Error("It occurred some error")
    }

  }

  public getBalance(): Balance {

    let totalIncome = 0;
    let totalOutcome = 0;
    this.transactions.forEach(item => {
      if (item.type === "income")
        totalIncome += item.value
      else
        totalOutcome += item.value
    }
    )

    const balance: Balance = {  income:totalIncome,  outcome: totalOutcome,
       total: totalIncome - totalOutcome };

    return balance

  }

  public create({id, title,type,value}:Transaction): Transaction {
      const transaction = new Transaction({title, type, value})
      this.transactions.push(transaction)

      return transaction;
  }
}

export default TransactionsRepository;
