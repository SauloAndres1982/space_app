import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles/index";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";
import Galeria from "./components/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";

const AppContainer = styled.div`
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
`;
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const FondoGradiente = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

  const alternarFavorito = (foto) => {

    if(foto.id===fotoSeleccionada?.id){
      setFotoSeleccionada({
        ...fotoSeleccionada, favorita: !foto.favorita
      })
    }
    setFotosGaleria(
      fotos.map((fotoGaleria) => {
        return {
          ...fotoGaleria,
          favorita: fotoGaleria.id === foto.id ? !foto.favorita : foto.favorita,
        };
      })
    );
  };

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner backgroundImage={banner} />
              <Galeria
                alSeleccionarFoto={(foto) => setFotoSeleccionada(foto)}
                fotos={fotosGaleria}
                alternarFavorito={alternarFavorito}
              />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom
          foto={fotoSeleccionada}
          alCerrar={() => setFotoSeleccionada(null)}
          alternarFavorito={alternarFavorito}
        />
      </FondoGradiente>
    </>
  );
};

export default App;
