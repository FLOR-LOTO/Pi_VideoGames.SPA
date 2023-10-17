import { useEffect } from "react"; //ayuda a controlar el ciclo de vida de una pagina
import { useDispatch, useSelector } from "react-redux"; // son hooks de react que nos permiten conectar con redux
import { Link } from "react-router-dom";

import { getGames } from "../../redux/actions/index";

import SearchBar from "../../components/searchBar/searchBar";
import Cards from "../../components/cards/cards";

import "./home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.allGames); // es la suscripcion al estado redux, de que estado depende

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  // le envio el estado con mis tarjetas
  return (
    <div className="">
      <SearchBar />
      <Cards allRenderGames={games} />

      <Link to={"/"}>
        <button>Salir</button>
      </Link>

      <Link to={"/form"}>
        <button>Crear un Videojuego</button>
      </Link>
    </div>
  );
};

export default Home;
