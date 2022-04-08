import './TextoInf.css';

const TextoInf = (): JSX.Element => {
  return (
    <div className="texto-informativo">
      <h2>
        NUESTROS <span>VALORES</span>
      </h2>
      <p>
        En Jardín de Bambú creemos que el valor de una buena cocina empieza con
        el valor de su producto. Trabajamos con proveedores locales, a ser
        posible, km cero. 
        </p>
        <p>
        Nos encanta el <span>slow food</span>, porque las cosas buenas hay
        que saborearlas. Recuerda lo que decía tu abuela, “a fuego lento, sabe
        mejor.” Eso si, te lo traeremos a la mesa lo más rápido posible,
        queremos que tu tiempo lo inviertas en los tuyos, no en esperar tus
        platos. 
        </p>
        <p>
        De todo eso se encargará un equipo de profesionales que estarán
        encantados de atenderte.
      </p>
    </div>
  );
};

export default TextoInf;
