import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 30px;

  h5{
    margin-left: 5px;
    color: #7D7D7D;
    font-family: Cairo;
    font-style: normal;
    font-weight: 200;
    font-size: 36px;
    text-transform: uppercase;
  }

  input {
      height: 75px;
      width: 100%;

      background-color: #FFF;
      
      border: 0;
      border-radius: 25px;

      padding-left: 25px;
      font-size: 26px;

  }

    input:focus  {     
      border: 3px solid #48cae4;
      padding: 22px;


  }
`;
