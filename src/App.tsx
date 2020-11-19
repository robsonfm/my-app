import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import {
  Container,
  Titulo,
  Subtitulo,
  Tabela,
  Box,
  Divisor
} from './styles';

const App = () => {

  const [listaReact, setListaReact] = useState();

  const reactTexto = `Inciado como um projeto pelo seus idealizadores, Julio Sena e Silverio Vale no final do mês de Outubro de 2020, a intenção era de ser um chat de troca de informações sobre assuntos abordados dentro do mundo React, como: melhores práticas, ferramentas, etc.
  Logo no seu segundo encontro já não funcionou mais como um simles chat, pois a proporção que tomou foi muito grande, se comparada a um chat, pois a reunião teve em torno de 14 pessoas presentes e a média hoje já está em 20 pessoas.  Desde então os debates estão sendo gravados e estão disponíveis na lista abaixo.
  É um tempo de crescimento mutuo e amadurecimento na área não só do React, mas em geral, podemos ver o agilismo e o design thinking (double diamond) sendo praticados com muita clareza.`;

  const projetoAcontecer = `O projeto é moderado pelo Silvério e Julio Sena, porém qualquer um é livre para discordar e expor sua opinião. Qualquer um pode dar inicio a discussão e se for de interesse fazer até mesmo um hands-on ou uma aprensentação.
  As reuniões tem sido gravadas e disponíveis no (dtiflix - Colocar o link aqui)`;

  useEffect(() => {
    axios.get(`https://react-challenge-api.herokuapp.com/first-challenge/episodes`)
      .then((res: any) => {
        const retornoLista = res.data;
        setListaReact(retornoLista);
      })
  }, []);

  return (
    <Container>
      <div>
        <Titulo>REACT DAILY CHAT</Titulo>
        <Box>
          <span>{reactTexto}</span>
        </Box>

        <Divisor></Divisor>

        <Titulo style={{}}>ASSUNTOS DO DEBATE</Titulo>
        <Subtitulo>Já debatidos</Subtitulo>
        <Tabela>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            Gravação:
            <li>Ut quis nibh eu nunc finibus condimentum.</li>
            Gravação:
            <li>Aenean finibus risus ac urna bibendum, ac tempor enim euismod.</li>
            Gravação:
          </Tabela>

        <Divisor></Divisor>

        <Subtitulo>Próximos assuntos</Subtitulo>
        <span>Obs.: Esses assuntos são temas que podem sofrer alterações devido ao desenvolvimento do debate, porém serão assuntos que provavelmente não deixarão de ser abordados.
        sugerimos que acompanhem todos os assuntos e já aboradados anteriormente para que assim aproveite melhor o conteúdo aqui explorado.
      </span>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Ut quis nibh eu nunc finibus condimentum.</li>
          <li>Aenean finibus risus ac urna bibendum, ac tempor enim euismod.</li>
        </ul>

        <Divisor></Divisor>

        <Subtitulo>Quem faz o projeto acontecer?</Subtitulo>
        <span>{projetoAcontecer}</span>
      </div>
    </Container>
  )

}

export default App;
