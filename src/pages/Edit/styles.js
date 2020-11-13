import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const Wrapper = styled.nav`
    width: 1400px;

    margin-top: 60px;
    margin-left: 50%;
    transform: translateX(-50%);
    
    h2 {
        font-family: Kanit;
        font-style: normal;
        font-weight: normal;
        font-size: 96px;
    }

    @media(max-width: 1400px) {
        width: 100vw;
        padding: 0 15px;
    }

    @media(max-width: 576px) {
        h2 {
            text-align: center;
            font-size: 60px;
        }
    }

    button {

        margin-top: 30px;
        padding: 10px 30px;

        border: 0;
        border-radius: 25px;

        background-color: #48cae4;

        font-family: Kanit;
        font-weight: normal;
        font-size: 36px;
        color: #FFF;

        transition: background-color 0.2s;

        outline: none !important;

    :hover {
        cursor: pointer;
        background-color: #00b4d8;
    }
    }
`;

