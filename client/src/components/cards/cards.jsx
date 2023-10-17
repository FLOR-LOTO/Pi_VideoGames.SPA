import Card from "../card/card";

import "./cards.module.css";

const Cards = ({ allRenderGames }) => {
  // traigo por props lo que envio desde el home
  const gamesList = allRenderGames;

  return (
    <div>
      {gamesList?.map((game, index) => {
        //por cada juego crea una card
        return (
          <Card
            key={index}
            id={game.id}
            name={game.name}
            status={game.description}
            species={game.image}
            gender={game.platform}
            origin={game.released}
            image={game.rating}
          />
        );
      })}
    </div>
  );
};

export default Cards;
