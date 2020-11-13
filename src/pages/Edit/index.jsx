import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';

import { 
  Container,
  Wrapper, } from './styles';

// import {db} from "../../firebase";


import Navbar from '../../components/Navbar';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Btn from '../../components/Btn';

import {db} from "../../firebase";


function Edit() {

  const params = useParams();
  db.collection("produtos").doc(`${params.id}`).get().then(function teste(doc) {
    
    var data = doc.data();

    window.$info =  data;
    
    
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });

  function handleCreate() {
    
    var produtosRef = db.collection("produtos").doc(`${params.id}`);

      return produtosRef.update({
        name: values.name,
        description: values.description,
        price: values.price,
        amont: values.amont,
        image: values.image,
      },)
      
  }
  
  
    var initialValue = {
      name: window.$info.name,
      description: window.$info.description,
      price: window.$info.price,
      amont: window.$info.amont,
      image:  window.$info.image
    }
    
    
    const [values, setValues] = useState(initialValue)
    

  const handleInputChange = e =>{
    var { name, value } = e.target
    setValues({
      ...values,
      [name]: value,

    })
  }

  return (
      <Container>
          <Navbar />
          <Wrapper>
             <h2>EDITAR PRODUTO</h2>

                    <form>
                    <div className="row">
                      <div className="col-12 col-sm-4">
                        <Input required id="name" onChange={handleInputChange} name="name" value={values.name} label="nome" />
                      </div>
                      <div className="col-12 col-sm-4">
                        <Input required id="price" onChange={handleInputChange} name="price" value={values.price}  label="preço" />
                      </div>
                      <div className="col-12 col-sm-4">
                        <Input required id="amont" onChange={handleInputChange} name="amont" value={values.amont} placeholder="Quantidade" label="qtd" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12">
                       <Textarea id="description" onChange={handleInputChange} name="description" value={values.description} placeholder="Descrição" label="descrição" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12">
                        <Input id="image" onChange={handleInputChange} name="image" value={values.image} placeholder="Link da Imagem" label="Imagem" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12">
                        <Link to={`/edit${params.id}`}>
                          <Btn onClick={handleCreate} label="EDITAR" />

                        </Link>
                        <Link to={`/`}>
                          <button>VOLTAR</button>


                        </Link>
                      </div>
                    </div>
                  </form>
                   
          </Wrapper>
      </Container>
  );
}

export default Edit;