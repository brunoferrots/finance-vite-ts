import { useState } from "react"
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./components/hooks/TransactionContext";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')//Especificando o tipo de elemenento modal para o TypeScript

export function App() {
  const [isOpenNewModalTransaction, setIsOpenNewModalTransaction] = useState(false)

  function handleOpenNewTransaction () {
    setIsOpenNewModalTransaction(true)
  }

  function handleCloseNewTransaction () {
    setIsOpenNewModalTransaction(false)
  }


  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransaction} />

      <NewTransactionModal 
        isOpen={isOpenNewModalTransaction}
        onRequestClose={handleCloseNewTransaction}
      />

      <Dashboard />
      
      <GlobalStyle />
    </TransactionsProvider>
  );
}
