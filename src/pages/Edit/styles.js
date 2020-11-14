import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    margin-bottom: 50px;

`;



export const Modal = styled.div`
    z-index: 1000;
    overflow-y: hidden;
    background: rgba(0, 0, 0, 0.8);
    position: absolute; 
    width: 100vw;
    min-height: 100vh;
    display: none;
    justify-content: center;
    align-items: center;


    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        background-color: #F5F5F5;
        border-radius: 25px;
        width: 50vw;
        padding: 150px 100px;
        

        h1 {
            font-size: 64px;
            font-family: Kanit;
            font-style: normal;
            font-weight: 500;

            color: #333;
            text-transform: uppercase;

            text-align: center;
        }

        button {
        margin-top: 20px;
        padding: 10px 30px;

        border: 0;
        border-radius: 25px;

        background-color: #48cae4;

        font-family: Kanit;
        font-weight: normal;
        font-size: 42px;
        color: #FFF;

        transition: background-color 0.2s;

        outline: none !important;

            :hover {
            cursor: pointer;
            background-color: #00b4d8;
            }
        }
    }

    @media(max-width: 1000px) {
        .wrapper{
            width: 80vw;
         padding: 150px 100px;
        }

        
    }

    @media(max-width: 500px) {
        .wrapper {
            width: 90vw;
            padding: 50px 50px;
            h1 {
                font-size: 40px;

            }
        }
    }
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

    @media(max-width: 400px) {
        .btn-back {
           margin-left: 50%;
           transform: translateX(-50%);
        }

       

        
    }
`;

