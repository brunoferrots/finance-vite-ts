import  Modal  from 'react-modal'
import closeImg from '../../assets/close-modal.svg'
import { Container } from './style';

interface NewTransactionInterfaceModal{
    isOpen: boolean;
    onRequestClose: () => void
}


export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionInterfaceModal) {
    


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

        <Container>
            <h2>Cadastra nova transação</h2>

            <input 
                placeholder='Título'
            />

            <input 
                placeholder='Valor'
            />

            <input 
                placeholder='Categoria'
            />

            <button type='submit'>
                Cadastrar
            </button>
        </Container>    
      </Modal>
    )
}