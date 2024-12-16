import styled from "styled-components"
import CampoTexto from "../CampoTexto"


const HeaderStyled = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        width: 212px;
    }

`

const Cabecera = () => {
    return <HeaderStyled>
        <img src="img/logo.png" alt="Logo de Space app" />        
        <CampoTexto />
    </HeaderStyled>
}

export default Cabecera