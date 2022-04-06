import "./Platos.css";
import Icono from "./helpers/Icono";
import ImagenProducto from './helpers/ImagenProducto';

const Platos = (): JSX.Element => {
  const array = ['GYOZAS','ROLLITOS','ZONGZI','RAMEN','FUSION','CHOWMEIN','ENSALADAS','BROCHETAS','ESPECIAL']
  return (
    <>
      <h2 className="platos">NUESTROS PLATOS</h2>
      <div className="contenedor-platos">
        <div className="eleccion-platos">
          <Icono source="../images/Soup.png" texto="Sopas" />
          <Icono source="../images/Rice.png" texto="Arroces" />
          <div className="separador">
            <Icono source="../images/Prawn.png" texto="Mariscos" />
            <Icono source="../images/Chicken.png" texto="Carnes" />
          </div>
        </div>
      </div>
      <div className="cuadricula">
        {array.map((comida:string) => <ImagenProducto texto={comida}/>)}
      </div>
      <button className="ver-mas visible">Ver más</button>
    </>
  );
};

export default Platos;
