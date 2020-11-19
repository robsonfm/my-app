import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {

  const [listaReact, setListaReact] = useState();

 /* const boxStyle = {margin: '20px', border: 'solid-2px-darkgray', padding: '20px', border-color: 'black'};
  const h1Style = {textTransform: 'uppercase', fontSize: '30px'};*/
  const projetoAcontecer = `O projeto é moderado pelo Silvério e Júlio Sena, porém qualquer um é livre para discordar e expor sua opinião. Qualque um que pode dar inicio a discussão e se for de interesse fazer até mesmo um hands-on ou uma aprensentação.
  As gravações tem sido iniciadas pelo Robson Melo e salvas no (dtiflix - Colocar o link aqui).`;

  useEffect(() => {
    axios.get(`https://react-challenge-api.herokuapp.com/first-challenge/episodes`)
      .then((res: any) => {
        const retornoLista = res.data;
        setListaReact(retornoLista);
      })
  }, []);

  return (
  <div style={{backgroundColor: '#282c34'}}>
    <div style={{backgroundColor: 'white'}}>
      <h1>React Daily Chat</h1>
      <p>Sobre:
      Inciado como um projeto pelo seus idealizadores, Júli Sena e Silverio Vale no final do mês de Outubro de 2020.
      A intenção era de ser como um chat de troca de informações sobre assuntos abordados dentro do mundo React, como: melhores práticas, ferramentas, etc.
      Logo no seu segundo encontro já não funcionou mais como um simles chat, pois a proporção que tomou foi muito grande, se comparada a um chat, pois a reunião teve em torno de 20 pessoas presentes.
      Desde então os debates estão sendo gravados e estão disponíveis na lista abaixo.
      É um tempo de mutuo crescimento e amadurecimento na área não só  do React, mas em geral, se tratando de tecnologia e metodologias ágéis.

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
      <p>{projetoAcontecer}</p>
    </div>
  </div>
  )}

export default App;
