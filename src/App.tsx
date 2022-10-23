import { useState } from "react"
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [isOpenNewModalTransaction, setIsOpenNewModalTransaction] = useState(false)

  function handleOpenNewTransaction () {
    setIsOpenNewModalTransaction(true)
  }

  function handleCloseNewTransaction () {
    setIsOpenNewModalTransaction(false)
  }


  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransaction} />

      <Modal 
        isOpen={isOpenNewModalTransaction}
        onRequestClose={handleCloseNewTransaction}
      >
        <h2>Cadastra nova transação</h2>

      </Modal>

      <Dashboard />
      
      <GlobalStyle />
    </>
  );
}
