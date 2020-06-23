interface CreateTransactionDTO {

    title: string;

    value: number;

    type: 'income' | 'outcome';
}

export default CreateTransactionDTO;