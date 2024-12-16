import styled from "styled-components";
import ItemNavegacion from "./ItemNavegacion";


const ListaStyled = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

const BarraLateral = () => {
     return (
        <aside>
            <nav>
                <ListaStyled>
                    <ItemNavegacion iconoActivo="iconos/home-activo.png" iconoInactivo="iconos/home-inactivo.png">
                        Inicio
                    </ItemNavegacion>
                    <ItemNavegacion iconoActivo="iconos/mas-vistas-activo.png" iconoInactivo="iconos/mas-vistas-inactivo.png" activo>
                        Más visitados
                    </ItemNavegacion>
                </ListaStyled>
            </nav>

        </aside>
     )
}

export default BarraLateral;