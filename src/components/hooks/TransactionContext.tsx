import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../../services/api'

interface Transaction { //Criando tipagem para o estado(useState -> transction)
    id: number
    title: string
    type: string
    category: string
    amount: number
    createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>//Typagem derivada da 'Transaction' omitindo elementos(recurso tyscript)

interface TransactionsContextData {
    transactions: Transaction[]
    createTransaction: (Transaction: TransactionInput) => Promise<void>
}

interface TransactionProviderProps { //Criando tipagem para informar que o componente 'Provider' pode recebe componentes filhos
    children: ReactNode
}

//Criando contexto para os dados
const TransactionContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
)

//Criando um componente para o utilizar contexto 
export function TransactionsProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    //A API realiza a mudança de dados com base no retorno do 'banco de dados' do Mirage.js 
    useEffect(() => {
        api.get('transactions')
            .then( response => setTransactions(response.data.transactions))
    }, [])
    //Função para enviar os dados inputados no formulário 
    async function createTransaction(transactionInput: TransactionInput) {
       const response = await api.post('/transactions', {
        ...transactionInput, createdAt: new Date(),
       })
       const { transaction } = response.data

       setTransactions([
        ...transactions,
        transaction,
       ])
    }
    //Encapsula os parametros do Array'transactions' e da Funcação'createTransaction' 
    return (
        <TransactionContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionContext)

    return context 
}