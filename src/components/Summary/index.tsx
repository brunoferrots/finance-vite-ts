import inputImg from '../../assets/input.svg'
import outputImg from '../../assets/output.svg'
import totalImg from '../../assets/total.svg'
import { Container } from "../Summary/styles";

export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={inputImg} alt="Entradas"/>
                </header>
                <strong>R$ 1000</strong>
            </div>
            <div>
                <header>
                    <p>Retiradas</p>
                    <img src={outputImg} alt="Retiradas"/>
                </header>
                <strong>-R$ 1000</strong>
            </div>
            <div className='highlight'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>R$ 0</strong>
            </div>
        </Container>
    )
}