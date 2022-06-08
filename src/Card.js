import React from "react";

const Card = ({ id, img, name, playRound }) => {
  return (
    <div className="card">
      <img id={id} src={img} onClick={() => playRound(id)} alt={name} />
      <div className="name">{name}</div>
    </div>
  );
};

export default Card;
