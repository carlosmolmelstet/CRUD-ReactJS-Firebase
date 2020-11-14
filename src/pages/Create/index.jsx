import React, {useState} from 'react';
import {db} from "../../firebase";
import { Link } from 'react-router-dom';

import { 
  Container,
  Wrapper, 
} from './styles';


import Navbar from '../../components/Navbar';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Btn from '../../components/Btn';


function Create() {


  // DEFINE O VALOR INICIAL DE UM PRODUTO
  const initialValue = {
    name: '',
    description: '',
    price: '',
    amont: '',
    image: ''
  }
  
  const [values, setValues] = useState(initialValue)

  // FUNÇÃO PARA CAPTURAR O VALOR DE UM INPUT
  const handleInputChange = e =>{
    var { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  // FUNÇÃO PARA CRIAR UM PRODUTO
  function handleCreate() {

    db.collection("produtos").add({
      name: values.name,
      description: values.description,
      price: values.price,
      amont: values.amont,
      image: values.image
  })
  }


  return (
      <Container>
          <Navbar />
          <Wrapper>
             <h2>ADICIONAR PRODUTO</h2>
            <form >
              <div className="row">
                <div className="col-12 col-sm-4">
                  <Input onChange={handleInputChange} name="name" value={values.name} label="nome"/>
                </div>
                <div className="col-12 col-sm-4">
                  <Input onChange={handleInputChange} value={values.price} name="price" label="preço" />
                </div>
                <div className="col-12 col-sm-4">
                  <Input onChange={handleInputChange} value={values.amont} name="amont" label="qtd" />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12">
                 <Textarea onChange={handleInputChange} value={values.description}  name="description" label="descrição" />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12">
                  <Input onChange={handleInputChange} value={values.image} name="image" label="Imagem" />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12">
                  <Link to="/">
                    <Btn  onClick={handleCreate}  label="ADICIONAR" />
                  </Link>
                </div>
              </div>
            </form>
          </Wrapper>
      </Container>
  );
}

export default Create;