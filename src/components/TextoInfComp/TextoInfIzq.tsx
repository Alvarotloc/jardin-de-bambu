import './TextoInf.css';
const TextoInfIzq = (): JSX.Element => {
  return (
    <div className="texto-informativo">
      <h2>
        NUESTRO <span>EQUIPO</span>
      </h2>
      <p>
        Un buen producto no es nada sin un buen <span>equipo humano</span>. 
        </p>
        <p> 
        Sabemos que como
        en casa no se está en ningún sitio, pero nuestros profesionales te
        tratarán tan bien que apenas notarás la diferencia. Te transmitirán la <span>pasión</span>
         por lo que hacen en cada bocado que pruebes. 
        </p>
        <p>
        Nuestra cocina se
        compone de un equipo mixto de personas locales y maestros originales de
        China que comparten el amor por la cocina regional de la tierra con la
        tradición culinaria más antigua del mundo. <span>Cinco mil años de evolución </span> 
        gastronómica <span>directa a tu plato</span>.
      </p>
    </div>
  );
};

export default TextoInfIzq;
