import "./PrimerTexto.css";
const PrimerTexto = (): JSX.Element => {
  return (
    <div className="primer-texto">
      <h1>
        TRADICIONAL Y <span>FRESH</span> SI PUEDEN IR DE LA MANO
      </h1>
      <p className="middleware-p">
        La cocina china tiene ocho escuelas <span>milenarias</span>, cada ciudad
        tiene su particular y especial forma de tratar los productos. No podemos
        llevarte a <span>Pekín</span> , pero podemos traerte su delicioso pato,
        y quizás no te suene Shandong, pero cuando pruebes su carpa agridulce
        del río amarilllo, seguro que no se te olvida.
      </p>
      <p>
        Dicen que el gusto recuerda mucho mejor que la vista, y en esta cocina
        el <span>paladar es el rey</span>.
      </p>
      <img src='../images/DragonFondo.png' alt="Imagen de dragon decorativa" className='dragon-fondo'/>
    </div>
  );
};

export default PrimerTexto;
