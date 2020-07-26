/* eslint-disable prettier/prettier */
import { Router } from 'express';
import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();
const createTransactionService = new CreateTransactionService(transactionsRepository)

//transactionRouter.get("/:id", (req, res) => res.send(req.params.id))

transactionRouter.get('/', (request, response) => {
  try {
    const balance = {
      transactions: transactionsRepository.all(),
      "balance": transactionsRepository.getBalance()
    };
    return  response.status(200).json(balance);

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const {id, title , type, value} = request.body;


   const transaction = createTransactionService.execute({id,title,type,value})

   return response.json(transaction);

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
