import React from "react";

const Card = ({ key, img, name, playRound }) => {
  return (
    <div className="card" key={key}>
      <img id={key} src={img} onClick={playRound} alt={name}></img>
      <div className="name">{name}</div>
    </div>
  );
};

export default Card;
