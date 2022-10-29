import { useTransactions } from "../hooks/TransactionContext";
import { Container } from "./style";   

export function TransactionTable() {
    const {transactions} = useTransactions()


    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}> 
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-br')
                                    .format(new Date(transaction.createdAt))}
                            </td>
                        </tr>
                    ))}              
                </tbody>
            </table>
        </Container>
    )
} 