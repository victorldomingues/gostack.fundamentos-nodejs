import TransactionsRepository from "../repositories/TransactionsRepository";
import GetTransactionsDto from "../dtos/GetTransactionsDto";

class GetTransactionsService {
    private transactionsRepository: TransactionsRepository;
    constructor(transactionsRepository: TransactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }
    public execute(): GetTransactionsDto {
        const transactions = this.transactionsRepository.all();
        const balance = this.transactionsRepository.getBalance();
        return { transactions, balance };
    }
}

export default GetTransactionsService;
