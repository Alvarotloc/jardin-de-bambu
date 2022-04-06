import Header from './components/HeaderComp/Header';
import PrimerTexto from './components/PrimerTextoComp/PrimerTexto';
import Platos from './components/PlatosComp/Platos';

const App = ():JSX.Element => {
  return (
    <>
      <Header />
      <img src='../images/ImagenTopopt.png' className='imagen-top' alt='Imagen comida asiatica'/>
      <PrimerTexto />
      <Platos />
    </>
  )
}

export default App