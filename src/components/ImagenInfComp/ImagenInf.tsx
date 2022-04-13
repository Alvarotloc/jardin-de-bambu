import './ImagenInf.css';

export type side = {
  side : string
}

const ImagenInf = ({side}:side):JSX.Element => {
    return (
      <div className='contenedor-imgs'>
        <img src={side ? "../images/harina.webp" : '../images/cocinero.webp'} alt="Foto de cocinero" className='principal' id={side ? '' : 'derecha'}/>
      </div>
    )
}

export default ImagenInf