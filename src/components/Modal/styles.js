import styled from 'styled-components';

export const Container = styled.nav`
    z-index: 99;
    position: absolute;
    width: 100vw;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Wrapper = styled.nav`
    position: absolute;
    background-color: red;

    width: 70vw;
    height: 70vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        text-align: center;
    }

`;
