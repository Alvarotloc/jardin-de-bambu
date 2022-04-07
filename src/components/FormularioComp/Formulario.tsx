import './Formulario.css';
import { useState } from 'react';
const Formulario = ():JSX.Element => {

    const [valid, setValid] = useState(false);
    const [error, setError] = useState(false);
    const [check, setCheck] = useState(false);
    const [emailProv, setEmailProv] = useState('')
    const [mensajeProv, setMensajeProv] = useState('')



    const handleSubmit = (e:any) => {
        e.preventDefault();
        if(/\w+@\w+\.\w+/.test(emailProv) && mensajeProv.trim() !== '' && check){
            setError(false)
            return setValid(true);
        }
        setError(true);
        setValid(false);
    }
  return (
    <div className='contenedor-formulario'>
        <h2 className='contacto-titulo'>CONTACTA CON NOSOTROS</h2>
        <div className={error ? 'error-form error' : 'error-form'}>Los campos Email, Mensaje y Terminos y Condiciones son obligatorios</div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" placeholder="Ingrese su nombre" id='nombre'/>
            </div>
            <div>
                <label htmlFor="movil">Móvil</label>
                <input type="text" placeholder="Ingrese su número de teléfono con prefijo ej(+34)" id='movil'/>
            </div>
            <div>
                <label htmlFor="email">Email*</label>
                <input type="email" placeholder="Ingrese email" id='email' value={emailProv} onChange={(e) => setEmailProv(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="mensaje">Mensaje*</label>
                <textarea name="mensaje" id="mensaje" placeholder="Ingrese su mensaje" value={mensajeProv} onChange={(e) => setMensajeProv(e.target.value)}></textarea>
            </div>
            <p>Condiciones*</p>
            <p>Términos y condiciones de privacidad</p>
           <label htmlFor="check" className='label-check'><input type="checkbox" name="check" id="check" onClick={() => setCheck(!check)}/>He leido y acepto la política de privacidad</label> 
           <input type="submit" value="ENVIAR" />
        </form>
    </div>
  )
}

export default Formulario