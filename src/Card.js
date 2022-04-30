import React, { useState } from "react";
import "./Card.css";

const Card = ({ item, selectCard }) => {
  const [value, setValue] = useState(item.value);
  const checkValue = (item) => {
    if (item.type === "bool") {
      return (
        <div>
          <button
            className={value === 1 ? "activeBtn" : ""}
            onClick={() => setValue(1)}
          >
            <i className="fa-solid fa-1"></i>
          </button>
          <button
            className={value === 0 ? "activeBtn" : ""}
            onClick={() => setValue(0)}
          >
            <i className="fa-solid fa-0"></i>
          </button>
        </div>
      );
    } else if (item.type === "float") {
      return (
        <div className="threeButton">
          <button
            onClick={() => {
              var v = value;
              v = v - 0.1;
              setValue(v);
            }}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <h3>{value}</h3>
          <button
            onClick={() => {
              var v = value;
              v = v + 0.1;
              setValue(v);
            }}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      );
    } else if (item.type === "choice") {
      return (
        <div className="threeButton">
          <button
            className={value === "fa-solid fa-angle-down" ? "activeBtn" : ""}
            onClick={() => setValue("fa-solid fa-angle-down")}
          >
            <i className="fa-solid fa-angle-down"></i>
          </button>
          <button
            className={value === "fa-solid fa-equals" ? "activeBtn" : ""}
            onClick={() => setValue("fa-solid fa-equals")}
          >
            <i className="fa-solid fa-equals"></i>
          </button>
          <button
            className={value === "fa-solid fa-angle-up" ? "activeBtn" : ""}
            onClick={() => setValue("fa-solid fa-angle-up")}
          >
            <i className="fa-solid fa-angle-up"></i>
          </button>
        </div>
      );
    } else if (item.type === "alarm") {
      return (
        <div>
          <button
            className={value === "Ev" ? "activeBtn" : ""}
            onClick={() => setValue("Ev")}
          >
            Ev
          </button>
          <button
            className={value === "Dış" ? "activeBtn" : ""}
            onClick={() => setValue("Dış")}
          >
            Dış
          </button>
        </div>
      );
    }
  };
  return (
    <div className="card">
      <h4>{item.name}</h4>
      <div className="icon">
        <i className={item.icon}></i>
      </div>
      <div className="value">{checkValue(item)}</div>
      <div className="addButton">
        <button
          onClick={() =>
            selectCard({
              name: item.name,
              value: value,
              icon: item.icon,
              type: item.type
            })
          }
        >
          Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
