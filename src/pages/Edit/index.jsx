import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';

import { 
  Container,
  Wrapper,
  Modal } from './styles';

// import {db} from "../../firebase";


import Navbar from '../../components/Navbar';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Btn from '../../components/Btn';

import {db} from "../../firebase";


function Edit() {

  const params = useParams();

  db.collection("produtos").doc(`${params.id}`).get(function teste(doc) {
    
    var data = doc.data();

    window.$info =  data;
    
    
  });

  // ===> FUNÇÃO PARA ALTERAR UM PRODUTO <===
  function handleCreate() {
    var produtosRef = db.collection("produtos").doc(`${params.id}`);
      
    // VALIDAR SE OS CAMPOS NÃO ESTAO VAZIOS
      if (values.name == "") {
        document.getElementById("modal-name").style.display = "flex";
      }
      if (values.description == "") {
        document.getElementById("modal-description").style.display = "flex";

      }
      if (values.price == "") {
        document.getElementById("modal-price").style.display = "flex";

      }
      if (values.amont == "") {
        // document.getElementById("modal-amont").style.display = "flex";
      }
      if (values.image == "") {
        document.getElementById("modal-image").style.display = "flex";
      }

      // FAZ A ATUALIZAÇÃO DAS INFOS DO PRODUTO
      else {
        // alert("atualizar?")
          return produtosRef.update({
            name: values.name,
            description: values.description,
            price: values.price,
            amont: values.amont,
            image: values.image,
          },)
      }
  }
  
  
    var initialValue = {
      name: "",
      description: "",
      price: "",
      amont: "",
      image: ""
    }
    
    
    const [values, setValues] = useState(initialValue)
    

  const handleInputChange = e =>{
    var { name, value } = e.target
    setValues({
      ...values,
      [name]: value,

    });
    
  }

  function closeName() {
    document.getElementById("modal-name").style.display = "none";
  }

  function closeDescription() {
    document.getElementById("modal-description").style.display = "none";
  }

  function closePrice() {
    document.getElementById("modal-price").style.display = "none";
  }

  function closeAmont() {
    document.getElementById("modal-amont").style.display = "none";
  }

  function closeImage() {
    document.getElementById("modal-image").style.display = "none";
  }


  return (
      <Container>

          
          <Modal id="modal-name">
            <div className="wrapper">
              <h1>Seu produto precisa de um nome</h1>
              <button onClick={closeName} >FECHAR</button>
            </div>
          </Modal>
          <Modal id="modal-description">
            <div className="wrapper">
              <h1>Seu produto precisa de uma descrição</h1>
              <button onClick={closeDescription} >FECHAR</button>
            </div>
          </Modal>
          <Modal id="modal-price">
            <div className="wrapper">
              <h1>Seu produto precisa de um preço</h1>
              <button onClick={closePrice} >FECHAR</button>
            </div>
          </Modal>
          <Modal id="modal-amont">
            <div className="wrapper">
              <h1>Seu produto precisa de uma quantidade</h1>
              <button onClick={closeAmont} >FECHAR</button>
            </div>
          </Modal>
          <Modal id="modal-image">
            <div className="wrapper">
              <h1>Seu produto precisa de uma imagem</h1>
              <button onClick={closeImage} >FECHAR</button>
            </div>
          </Modal>
         
        
          <Navbar />
          <Wrapper>
             <h2>EDITAR PRODUTO</h2>
                  <form>
                    <div className="row">
                      <div className="col-12 col-sm-4">
                        <Input type="text"  id="name" onChange={handleInputChange} name="name" value={values.name} placeholder="NOME" label="nome" />
                      </div>
                      <div className="col-12 col-sm-4">
                        <Input type="number"  id="price" onChange={handleInputChange} name="price" value={values.price} placeholder="PREÇO" label="preço " />
                      </div>
                      <div className="col-12 col-sm-4">
                        <Input type="number" required id="amont" onChange={handleInputChange} name="amont" value={values.amont} placeholder="QUANTIDADE" label="qtd" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12">
                       <Textarea id="description" onChange={handleInputChange} name="description" value={values.description} placeholder="DESCRIÇÂO" label="descrição" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12">
                        <Input type="text" id="image" onChange={handleInputChange} name="image" value={values.image} placeholder="LINK DA IMAGEM" label="Imagem" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12 ">
                        <Link to={`/edit${params.id}`}>
                          <Btn className="btn-edit"  onClick={handleCreate} label="EDITAR" />

                        </Link>
                        <Link to={`/`}>
                          <button className="btn-back">VOLTAR</button>


                        </Link>
                      </div>
                    </div>
                  </form>
                   
          </Wrapper>
      </Container>
  );
}

export default Edit;