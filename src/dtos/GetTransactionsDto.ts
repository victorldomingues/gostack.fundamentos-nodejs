import Transaction from "../models/Transaction";
import Balance from "../models/Balance";

interface GetTransactionsDto {
    transactions: Transaction[];
    balance: Balance;
}

export default GetTransactionsDto;