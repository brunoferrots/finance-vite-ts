import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

interface Transaction { //Criando tipagem para o estado(useState -> transction)
    id: number
    title: string
    type: string
    category: string
    amount: number
    createdAt: string
}

interface TransactionProviderProps { //Criando tipagem para informar que o compenente 'Provider' pode recebe componentes filhos
    children: ReactNode
}

//Criando contexto para os dados
export const TransactionContext = createContext<Transaction[]>([])

//Criando um componente para o utilizar contexto 
export function TransactionsProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    //Excuta a API realizando a mudança de dados com base no retorno do 'banco de dados' do Mirage.js 
    useEffect(() => {
        api.get('transactions')
            .then( response => setTransactions(response.data.transactions))
    }, [])

    return (
        <TransactionContext.Provider value={transactions}>
            {children}
        </TransactionContext.Provider>
    )
}