import "./card.module.css";

const Card = ({ id, name, image }) => {
  //recibe el juego que le envio dese cards para que extraiga los atributos

  return (
    <div className="">
      <h2 className="">{id}</h2>
      <h2 className="">{name}</h2>
      <img src={image} alt="" />
    </div>
  );
};

export default Card;
