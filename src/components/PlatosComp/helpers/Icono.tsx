interface IconParams {
    source : string,
    texto : string
}

const Icono = ({source,texto}:IconParams):JSX.Element => {
  return (
    <div className="icono">
        <img src={source} alt={texto}/>
        <p>{texto}</p>
    </div>
  )
}

export default Icono