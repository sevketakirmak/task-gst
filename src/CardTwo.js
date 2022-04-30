import React from "react";
import "./Card.css";

const CardTwo = ({ item, deleteCard, arraymove }) => {
  return (
    <div className="listCard">
      <h4>{item.name}</h4>
      <div className="icon">
        <i className={item.icon}></i>
        <button>
          {item.type !== "choice" ? (
            typeof item.value === "string" ? (
              item.value
            ) : (
              item.value.toFixed(2)
            )
          ) : (
            <i className={item.value}></i>
          )}
        </button>
      </div>
      <div className="threeButton">
        <button
          onClick={() => {
            arraymove(item, 1);
          }}
        >
          <i className="fa-solid fa-angles-down"></i>
        </button>
        <button
          onClick={() => {
            arraymove(item, -1);
          }}
        >
          <i className="fa-solid fa-angles-up"></i>
        </button>
        <button
          onClick={() => {
            deleteCard(item.name);
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CardTwo;
