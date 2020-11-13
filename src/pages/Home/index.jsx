import React, { useEffect, useState } from 'react';

import {db} from "../../firebase";
import {Link} from 'react-router-dom';

import Navbar from '../../components/Navbar';
import exclude from '../../images/delete.svg';
import edit from '../../images/edit.svg';
import { 
  Container,
  Wrapper,
  Titulo,
  List,
  Product
 } from './styles';

function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(()=>{
    db.collection('produtos/').onSnapshot(snapshot=>{
      setProdutos(snapshot.docs.map(function(doc){
        return {id:doc.id,
          info:doc.data()};
      }))
    })
  },[])
  
  


  

  // useEffect(()=>{
  //   db.collection('produtos/').onSnapshot(snapshot=>{
  //     setID(snapshot.docs.map(function(doc){
  //       return {id:doc.id};
  //     }))
  //   })
  // },[])

  return (
      <Container>
          <Navbar />
          <Wrapper>
              <Titulo>
                <h2>PRODUTOS</h2>
                <Link to="/create">
                  <button>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
                  </button>
                </Link>
              </Titulo>

              <div className="row">

               {
                 produtos.map(function(val){
                    return (
                      <div key={val.id} className="col-lg-4 col-md-6 col-sm-12">
                        <Product>
                          <div class="row">
                            <div className="col-12 text-center product-name">
                               <h5>{val.info.name}</h5>
                            </div>
                          </div>
                          <div class="row">
                            <div className="col-12 text-center product-description">
                               <h6>{val.info.description}</h6>
                            </div>
                          </div>
                          <div class="row">
                            <div className="col-6">
                               <div className="product-specs">
                                 <p>R$: {val.info.price}</p>
                                 <p>UN: {val.info.amont}</p>
                               </div>
                            </div>
                            <div className="col-6">
                               <div className="product-action">
                               
                                 <Link to={`/edit${val.id}`}>
                                  <img className="edit" src={edit} alt=""/>
                                 </Link>
                                 <img onClick={() => db.collection("produtos").doc(`${val.id}`).delete().then(function() {
                                console.log("excluir");
                              }).catch(function(error) {
                                  console.error("Error removing document: ", error);
                              })} 
                                 
                                 
                                 src={exclude} alt=""/>
                               </div>
                            </div>
                          </div>
                        </Product>
                        
                      </div>
                        
                    )
                  })
                }
               
              </div>



          </Wrapper>
      </Container>
  );
}

export default Home;