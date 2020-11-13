import React, {useState, useCallback} from 'react';

import { 
  Container,
  Wrapper, } from './styles';

import {db} from "../../firebase";


import Navbar from '../../components/Navbar';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Btn from '../../components/Btn';
import { Link } from 'react-router-dom';


function Create() {

  const initialValue = {
    name: '',
    description: '',
    price: '',
    amont: '',
    image: ''
  }
  

  const [values, setValues] = useState(initialValue)

  const handleInputChange = e =>{
    var { name, value } = e.target
    setValues({
      ...values,
      [name]: value,

    })
  }


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