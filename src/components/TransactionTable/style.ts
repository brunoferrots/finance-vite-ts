import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;
    }

    th {
        color: var(--state-gray);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
    }

    td {
        padding: 1rem 2rem;
        border: 0;
        background: var(--mint-cream);
        color: var(--state-gray);

        &:first-child {
            color: var(--xiketic);   
        }

        &.deposit {
            color: var(--viridian-green);
            font-weight: bold;
        }

        &.withdraw {
            color: var(--african-violet);
            font-weight: bold;
        }
    }
`