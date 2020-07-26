/* eslint-disable no-else-return */
/* eslint-disable prettier/prettier */
import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ id, title, type, value }: Transaction): Transaction {

    const balance = this.transactionsRepository.getBalance()

    if (type === "outcome" &&  balance.total < value) {
      throw Error("The product is more expensive than your income")
    }
    else {
      const transaction = this.transactionsRepository.create({ id, title, type, value })
      return transaction
    };

  };

} export default CreateTransactionService;
