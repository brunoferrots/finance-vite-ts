import { useState, FormEvent } from 'react'
import  Modal  from 'react-modal'
import closeImg from '../../assets/close-modal.svg'
import upArrow from '../../assets/up-arrow.svg'
import downArrow from '../../assets/down-arrow.svg'
import { Container, TransactionTypeContent, RadioBox } from './style';
import { api } from '../../services/api'

interface NewTransactionInterfaceModal{
    isOpen: boolean;
    onRequestClose: () => void
}


export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionInterfaceModal) {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()
        
        const data = {
            title, 
            value, 
            category, 
            type
        }

        api.post('/transactions', data)
    }

    return (



        <Modal  
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='modal-overlay'
            className='modal-content'
        >
        
        <button 
            type='button' 
            onClick={onRequestClose}
            className='modal-close'
        >
            <img src={closeImg} alt='Fechar' />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastra nova transação</h2>

            <input 
                placeholder='Título'
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <input 
                type='number'
                placeholder='Valor'
                value={value}
                onChange={event => setValue(Number(event.target.value))}
            />

            <TransactionTypeContent>
                <RadioBox
                    type='button'
                    onClick={() => {setType('deposit')}}
                    isActive={type === 'deposit'}
                    activeColor='green'
                >
                    <img src={upArrow} />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox
                    type='button'
                    onClick={() => {setType('withdraw')}}
                    isActive={type === 'withdraw'}
                    activeColor='red'
                >
                    <img src={downArrow} />
                    <span>Saída</span>
                </RadioBox>
            </TransactionTypeContent>

            <input 
                placeholder='Categoria'
                value={category}
                onChange={event => setCategory(event.target.value)}
            />

            <button type='submit'>
                Cadastrar
            </button>
        </Container>    
      </Modal>
    )
}