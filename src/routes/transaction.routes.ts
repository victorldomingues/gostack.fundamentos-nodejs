import { Router } from 'express';
import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import GetTransactionsService from '../services/GetTransactionsService';

const transactionRouter = Router();
const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    const service = new GetTransactionsService(transactionsRepository);
    return response.status(200).json(service.execute());
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, value, type } = request.body;
    const service = new CreateTransactionService(transactionsRepository);
    return response.status(200).json(service.execute({ title, value, type }));
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
