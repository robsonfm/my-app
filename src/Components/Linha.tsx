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

    const [collapse, setCollapse] = useState(true);
    const [textoDescricao, setTextoDescricao] = useState("");
    const abrirDescricao = () => {

        setCollapse(!collapse);
        axios.get(`https://react-challenge-api.herokuapp.com/first-challenge/episodes/${id}`).
            then((res: any) => {
                const texto = res.data.fullDescriptionHtml;
                setTextoDescricao(texto);
            })
    }

    return (
        <li key={id} onClick={abrirDescricao}>
            {data} - {descricao}
            {collapse &&
                <div dangerouslySetInnerHTML={{ __html: textoDescricao }} />
            }
        </li>
    )
}


export default Linha