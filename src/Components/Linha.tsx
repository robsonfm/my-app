import React, { useState } from 'react';
import axios from 'axios';


interface Props {
    id: number,
    data: string,
    descricao: string,
}

const Linha = ({
    id,
    data,
    descricao,
}: Props) => {

    const [textoDescricao, setTextoDescricao] = useState();
    const abrirDescricao = () => {
        axios.get(`https://react-challenge-api.herokuapp.com/first-challenge/episodes/${id}`).
            then((res: any) => {
                const texto = res.data.fullDescriptionHtml;
                //console.log(texto);
                setTextoDescricao(texto);
            })
    }

    return (
        <li key={id} onClick={abrirDescricao}>
            {data} - {descricao} {textoDescricao}
        </li>
    )
}


export default Linha