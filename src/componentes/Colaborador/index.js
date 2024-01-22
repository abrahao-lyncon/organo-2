import React from 'react'
import './colaborador.css'
import { IoIosCloseCircleOutline, IoIosHeartEmpty, IoMdHeart  } from "react-icons/io";



const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    function favoritar(){
        aoFavoritar(colaborador.id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
    <div className="colaborador">
        <IoIosCloseCircleOutline size={25} className="deletar"onClick={() => aoDeletar(colaborador.id)}/>
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
        <div className='favoritar'>
            {colaborador.favorito 
                ? <IoMdHeart  {...propsFavorito} color={"red"}/> 
                : <IoIosHeartEmpty {...propsFavorito} />
}
        </div>
    </div>)
}

export default Colaborador