import { TransactionDTO } from './transaction-dto';

export interface BankAccountDTO {
    id: number;
    balance: number;
    transactions: TransactionDTO[];
}
