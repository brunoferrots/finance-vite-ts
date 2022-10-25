import { useState } from "react"
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

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

      <NewTransactionModal 
        isOpen={isOpenNewModalTransaction}
        onRequestClose={handleCloseNewTransaction}
      />

      <Dashboard />
      
      <GlobalStyle />
    </>
  );
}
