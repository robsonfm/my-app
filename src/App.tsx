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
    <div>
      <h1>React Daily Chat</h1>
      <p>Sobre:
      Porque nós o usamos?
      É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero).
      </p>
      <h2>Assuntos do debate</h2>
      <h3>Já debatidos</h3>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        Gravação:
        <li>Ut quis nibh eu nunc finibus condimentum.</li>
        Gravação:
        <li>Aenean finibus risus ac urna bibendum, ac tempor enim euismod.</li>
        Gravação:
      </ul>
      <h3>Próximos assuntos</h3>
      <p>Obs.: Esses assuntos são temas que podem sofrer alterações devido ao desenvolvimento do debate, porém serão assuntos que provavelmente não deixarão de ser abordados.
        sugerimos que acompanhem todos os assuntos e já aboradados anteriormente para que assim aproveite melhor o conteúdo aqui explorado.
      </p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Ut quis nibh eu nunc finibus condimentum.</li>
        <li>Aenean finibus risus ac urna bibendum, ac tempor enim euismod.</li>
      </ul>

      <h3>Quem faz o projeto acontecer?</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis, enim ac iaculis iaculis, nunc tellus fringilla enim, at feugiat eros nulla in est. Nullam ac leo enim. Cras maximus massa imperdiet, lacinia elit nec, vestibulum tellus. Nullam euismod diam mi, et porttitor sem eleifend sit amet. Nulla eget ultrices nisl. Aliquam ornare ornare enim, condimentum feugiat massa maximus in. Duis eleifend eget magna vitae tincidunt. Nam lobortis placerat mauris ac fermentum. Nam eu ornare purus, non auctor urna. Phasellus nec blandit lacus, sed consectetur ex. Quisque convallis felis mi, quis cursus odio lobortis sed.</p>
      


    </div>
  )
}


export default App;
