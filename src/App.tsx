import Header from './components/HeaderComp/Header';
import PrimerTexto from './components/PrimerTextoComp/PrimerTexto';
import Platos from './components/PlatosComp/Platos';
import Formulario from './components/FormularioComp/Formulario';
import ImagenInf from './components/ImagenInfComp/ImagenInf';
import TextoInf from './components/TextoInfComp/TextoInf';
import TextoInfIzq from './components/TextoInfComp/TextoInfIzq';

const App = ():JSX.Element => {
  return (
    <>
      <Header />
      <img src='../images/ImagenTopopt.webp' className='imagen-top' alt='Imagen comida asiatica'/>
      <PrimerTexto />
      <Platos />
      <div className="valores">
        <ImagenInf side='izq'/>
        <TextoInf/>
      </div>
      <div className='equipo'>
        <TextoInfIzq />
        <ImagenInf side=''/>
      </div>
      <Formulario />
    </>
  )
}

export default App