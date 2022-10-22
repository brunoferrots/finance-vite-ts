import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
        background: var(--mint-cream);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--xiketic-shade);

        
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;    

        }

        &.highlight {
            background: var(--viridian-green);
            color: var(--mint-cream);
           
        }
        
        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 600;
            line-height: 3rem;
        }

    }

    
`