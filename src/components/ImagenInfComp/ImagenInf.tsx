import './ImagenInf.css';

export type side = {
  side : string
}

const ImagenInf = ({side}:side):JSX.Element => {
    return (
      <div className='contenedor-imgs'>
        <img src={side ? "../images/harina.png" : '../images/cocinero.png'} alt="Foto de cocinero" className='principal' id={side ? '' : 'derecha'}/>
        <img src={side ? "../images/primer-plato.png" : "../images/segundo-plato.png"} alt="Foto de comida" className='secundaria' id={side ? '' : 'img-relativa'}/>
      </div>
    )
}

export default ImagenInf