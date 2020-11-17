import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {

  const [listaReact, setListaReact] = useState();

  useEffect(() => {
    axios.get(`https://react-challenge-api.herokuapp.com/first-challenge/episodes`)
      .then(res => {
        const retornoLista = res.data;
        setListaReact(retornoLista);
      })

  }, []);
  console.log(listaReact);
  return (
    <div> oi </div>
  )
}


export default App;
