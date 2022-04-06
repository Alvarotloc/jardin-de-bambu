type Texto = {
    texto : string
}
const ImagenProducto = ({texto}:Texto):JSX.Element => {
  return (
    <div className="imagen-eleccion">
        <img src={`../images/${texto}.jpg`} alt={texto} />
        <div className="texto-modal-image">{texto}</div>
    </div>
  )
}

export default ImagenProducto