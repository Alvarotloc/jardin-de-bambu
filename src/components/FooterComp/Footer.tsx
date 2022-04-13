import "./Footer.css";
const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className="contenido-footer">
        <div className="informacion">
          <img
            src="../images/Logo.webp"
            alt="Logo de la empresa"
            id="logo-peque"
          />
          <p className="info-general">
            “Nos complace darle la bienvenida a nuestra página web e invitarle a
            conocer más de cerca nuestro local y nuestra excelente cocina.”
          </p>
          <div className="rrss"></div>
        </div>
        <div className="contacto">
          <h4>Contacto</h4>
          <div className="info-trozo">
            <h5>Dirección</h5>
            <p>Avenida de Viñuelas 47-49,</p>
            <p>28760 Tres Cantos</p>
          </div>
          <div className="info-trozo">
            <h5>Teléfono</h5>
            <p>900 00 00 00</p>
            <p>900 00 00 00</p>
          </div>
          <div className="info-trozo">
            <h5>Email</h5>
            <p>jardinde@bambu.com</p>
          </div>
        </div>
        <div className="location">
            <h4>Localizacion</h4>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.4879232920343!2d-3.701255284598582!3d40.597057279344575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd43d4e09595bb57%3A0xb34b6f2976509b82!2zSmFyZMOtbiBkZSBCYW1iw7o!5e0!3m2!1ses!2ses!4v1649845243555!5m2!1ses!2ses"></iframe>
        </div>
        <div className="horario">
          <h4>Horarios</h4>
          <div className="info-trozo">
            <p>De lunes a domingo restaurante:</p>
            <p>12:30 - 16:30 / 19:30 - 23:00</p>
          </div>
          <div className="info-trozo">
            <p>De lunes a domingo para llevar:</p>
            <p>12:30 - 16:30 / 19:30 - 23:30</p>
          </div>
          <div className="metodos-pago"></div>
        </div>
      </div>
      <nav className="footer-legales">
        <p>Restaurante Chino Jardín De Bambú. All Rights Reserved</p>
        <div className="legales">
          <span>|</span> <span>Política Privacidad</span>
          <span> Términos de uso</span> <span>Legal</span> <span>Cookies</span>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
