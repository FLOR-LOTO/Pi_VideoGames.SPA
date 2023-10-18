import Card from "../card/card";

import "./cards.module.css";

const Cards = ({ games }) => {
  // traigo por props lo que envio desde el home
  
  return (
    <div>
      {games?.map((game, index) => {
        //por cada juego crea una card
        return (
          <Card
            key={index}
            id={game.id}
            name={game.name}
            image={game.image}
          />
        );
      })}
    </div>
  );
};

export default Cards;
