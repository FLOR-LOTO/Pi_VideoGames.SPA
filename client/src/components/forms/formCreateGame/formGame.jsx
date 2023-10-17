import style from "./formGame.module.css";

const FormGame = () => {
  
  return (
    <div className={style.formContainer}>
      <h1>Formulario de Creación de Videojuegos</h1>
      <form className={style.formGrid} >
        <div className={style.formField}>
          <label className={style.label} htmlFor="name">Nombre:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label className={style.label} htmlFor="image">Imagen:</label>
          <input type="file" id="image" accept="image/*" required />
        </div>
        <div>
          <label className={style.label} htmlFor="description">Descripción:</label>
          <textarea id="description" required></textarea>
        </div>
        <div>
          <label className={style.label} htmlFor="platforms">Plataformas:</label>
          <input type="text" id="platforms" required />
        </div>
        <div>
          <label className={style.label} htmlFor="relased">Fecha de Lanzamiento:</label>
          <input type="date" id="fechaLanzamiento" required />
        </div>
        <div>
          <label className={style.label} htmlFor="rating">Rating:</label>
          <input type="number" id="rating" min="1" max="10" required />
        </div>
        <div>
          <label className={style.label} htmlFor="generos">Géneros:</label>
          <select id="generos" multiple required>
            <option value="accion">Acción</option>
            <option value="aventura">Aventura</option>
            <option value="estrategia">Estrategia</option>
            <option value="deportes">Deportes</option>
            <option value="otros">Otros</option>
          </select>
        </div>
        <div className={style.submitContainer}>
          <button type="submit">Crear Videojuego</button>
        </div>
      </form>
      <div className={style.gameInfo}>
        {/* Aquí mostrar la información del juego creado */}
      </div>
    </div>
    
  );
};

export default FormGame;