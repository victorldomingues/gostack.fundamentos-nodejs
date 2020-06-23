import Transaction from '../models/Transaction';
import CreateTransactionDTO from '../dtos/CreateTransactionDto';
import Balance from '../models/Balance';



class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  getIncomeTotal(): number {
    return this.transactions.filter(x => x.type === 'income').reduce((acc, transaction) => acc += transaction.value, 0);
  }

  getOutcomeTotal(): number {
    return this.transactions.filter(x => x.type === 'outcome').reduce((acc, transaction) => acc += transaction.value, 0)
  }

  public getBalance(): Balance {
    const income = this.getIncomeTotal();
    const outcome = this.getOutcomeTotal();
    const total = income - outcome;
    return { income, outcome, total };
  }

  public create({ title, type, value }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
