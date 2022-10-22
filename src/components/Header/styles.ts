import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--fuzzy);

`
export const Content = styled.div`
    max-width: 70vw;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        border: solid 2px var(--plump-purple);
        border-radius: 0.25rem;
        padding: 3px;

    }

    strong {
        font-family: 'Oswald';
        font-size: 2rem;
        font-weight: 600;
        color: var(--xiketic);
    }

    button {
        font-size: 1rem;
        color: var(--lavender);
        background: var(--plump-purple);
        border: 0;
        border-radius: 0.25rem;
        padding: 0 2rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`