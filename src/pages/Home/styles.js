import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const Wrapper = styled.div`
    width: 1400px;

    margin-top: 50px;
    margin-left: 50%;
    transform: translateX(-50%);

    padding: 15px;  

    @media(max-width: 1400px) {
        width: 100vw;
    }

`;

export const Titulo = styled.div`
    display: flex;
    align-items: center;
    color: #FFF;
    
    h2 {
        font-size: 90px
    }
   
    button {
        outline: none !important;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        width: 100px;
        margin-left: 30px;
        background-color: #48cae4;
        border: 0;
        border-radius: 25px;
        color: #FFF;
        font-size: 64px;
        transition: background-color 0.2s;

        }
    button:hover {
        background-color: #00b4d8;
        cursor: pointer;
    }

    @media(max-width: 608px) {
        h2 {
        font-size: 60px
        }
    }

    @media(max-width: 463px) {
        display: initial;

        h2 {
            text-align: center;
        }
        button {
            margin-left: 50%;
            transform: translateX(-50%);
        }
    }

`;


export const Product = styled.div`
    height: 400px;

    margin-top: 30px;
    padding: 20px;

    background: #474747;
    border-radius: 20px;

    color: #FFF;
    font-size: 24px;

    transition: background-color 0.2s;

    :hover {
        background: #575757;
    }

    .product-name h5{
        text-transform: uppercase;
        font-size: 48px;
        font-weight: 500;
        font-family: 'Kanit', sans-serif;
    }

    .product-description h6{
        font-size: 22px;
        font-weight: 300;
    }


    .product-description{
        height: 200px;
        max-height: 200px;
        overflow: hidden;
    }

    .product-action {
        display: flex;
        justify-content: flex-end;

        margin-top: 40px;

        .edit {
            margin-right: 20px;
        }
    }

    .product-action img:hover {
        cursor: pointer;
    }

    @media(max-width: 463px) {
        .product-name h5{
        font-size: 40px;
        }
    }

    
`;

