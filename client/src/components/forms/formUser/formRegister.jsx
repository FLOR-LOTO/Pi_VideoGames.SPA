import "./formRegister.module.css";

const FormRegister = () => {
  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form>
        <div>
          <label htmlFor="username">Nombre:</label>
          <input type="text" id="username" value=""/>
        </div>
        <div>
          <label htmlFor="lastname">Apellido:</label>
          <input type="lastname" id="lastname" value=""/>
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" value=""/>
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" value="" />
        </div>
        <div>
          <button type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
