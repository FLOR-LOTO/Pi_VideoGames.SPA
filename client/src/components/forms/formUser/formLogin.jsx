import { Link } from "react-router-dom";

import "./formLogin.module.css";

const FormLogin = () => {
  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" value="" />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" value="" />
        </div>
        <div>
          <button type="submit">Ingresar</button>
        </div>
      </form>
      <p>
        ¿No estás registrado? <Link to="/register">Haz clic aquí</Link> para
        registrarte.
      </p>
    </div>
  );
};

export default FormLogin;
