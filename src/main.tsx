import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { createServer, Model } from 'miragejs'

createServer({
  //Banco de dados do Mirage.js - transaction <- tabela do banco
  models: {
    transaction: Model,
  },

  //Pré armazenamento de dados, no banco de dados 
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date ('2022-10-24 11:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1300,
          createdAt: new Date ('2022-10-28 18:00:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api'
    
    this.get('/transactions', () => {
      return this.schema.all('transaction')//pegando todas as transações
       
    })

    this.post('/transactions', (schema/* acesso ao banco de dados*/, requeste) => {
      const data = JSON.parse(requeste.requestBody)

      return schema.create('transaction', data)//enviando as transações para o banco
    })

  } 
})


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
