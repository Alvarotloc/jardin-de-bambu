import { useState } from "react";
import "./Header.css";
const Header = (): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <>
      <header>
        <nav className={modal ? "nav-izquierda activa" : "nav-izquierda"}>
          <a href="#">MENU</a>
          <a href="#" className="centroIzq">
            ABOUT US
          </a>
          <a href="#">TODAY`S MENU</a>
        </nav>
        <img src="../images/Logo.png" alt="Logo de la empresa" id="logo" />
        <nav className="nav-derecha">
          <a href="#">
            M <span>TAKEAWAY</span>
          </a>
          <a href="#" className="centroDer">
            M <span>RESERVATIONS</span>
          </a>
          <a href="#">S</a>
        </nav>
        <div className="headerResponsive" onClick={() => setModal(!modal)}>
          <span className={modal ? 'negativo' : ''}></span>
          <span className={modal ? 'invisible' : ''}></span>
          <span className={modal ? 'positivo' : ''}></span>
        </div>
      </header>
    </>
  );
};

export default Header;
