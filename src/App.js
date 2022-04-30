import React, { useState } from "react";
import Card from "./Card";
import CardTwo from "./CardTwo";
import Delay from "./Delay";
import "./styles.css";

const propsList = [
  {
    name: "2",
    icon: "fa-regular fa-lightbulb",
    type: "bool",
    value: 0
  },
  {
    name: "3",
    icon: "fa-regular fa-lightbulb",
    type: "bool",
    value: 0
  },
  {
    name: "vana",
    icon: "fa-solid fa-unlock-keyhole",
    type: "float",
    value: 25
  },
  {
    name: "kombi",
    icon: "fa-solid fa-temperature-high",
    type: "float",
    value: 25
  },
  {
    name: "yakut",
    icon: "fa-regular fa-lightbulb",
    type: "bool",
    value: 0
  },
  {
    name: "alarko",
    icon: "fa-regular fa-lightbulb",
    type: "float",
    value: 25
  },
  {
    name: "perde",
    icon: "fa-solid fa-prescription-bottle",
    type: "choice",
    value: ""
  },
  {
    name: "alarm",
    icon: "fa-solid fa-bell",
    type: "alarm",
    value: ""
  }
];

export default function App() {
  const [listCards, setCards] = useState([]);
  const [list, setList] = useState(propsList);
  const [v, setV] = useState();

  const selectCard = (item) => {
    var objList = listCards;
    if (objList.some((obj) => obj.name === item.name)) {
      for (let index = 0; index < objList.length; index++) {
        if (objList[index].name === item.name) {
          objList[index] = { ...objList[index], value: item.value };
          setV(item.value);
          setCards(objList);
        }
      }
    } else {
      setCards([...listCards, item]);
    }
  };
  const deleteCard = (name) => {
    setCards(listCards.filter((item) => item.name !== name));
  };
  const arraymove = (item, toIndex) => {
    var objList = listCards;
    var element = objList[objList.indexOf(item)];
    var index = objList.indexOf(item) + toIndex;
    if (index >= 0 && index < objList.length) {
      objList.splice(objList.indexOf(item), 1);
      objList.splice(index, 0, element);
      setV(v + 1);
      setCards(objList);
    }
  };
  const renderList = listCards.map((item) => {
    return (
      <div>
        <Delay />{" "}
        <CardTwo item={item} deleteCard={deleteCard} arraymove={arraymove} />
      </div>
    );
  });
  const renderCards = list.map((item) => {
    console.log("here2");
    return <Card item={item} selectCard={selectCard} />;
  });
  return (
    <div className="main">
      <div>
        <div className="head">
          <div className="content">
            <input type="text" placeholder="SENARYO İSMİ GİRİNİZ" />
            <div className="buttons">
              <button>
                <i className="fa-solid fa-xmark"></i>
              </button>
              <button>
                <i className="fa-solid fa-download"></i>
              </button>
            </div>
          </div>
          <div className="types">
            <div>
              <label htmlFor="scales">hepsi</label>
              <input type="radio" />
            </div>
            <div>
              <label htmlFor="scales">alan</label>
              <input type="radio" />
            </div>
            <div>
              <label htmlFor="scales">tip</label>
              <input type="radio" />
            </div>
            <div>
              <label htmlFor="scales">a-z</label>
              <input
                onClick={() => {
                  setList(
                    propsList.sort(function (a, b) {
                      var textA = a.name.toUpperCase();
                      var textB = b.name.toUpperCase();
                      return textA < textB ? -1 : textA > textB ? 1 : 0;
                    })
                  );
                  setV(v + 1);
                  console.log(list);
                }}
                type="radio"
              />
            </div>
          </div>
        </div>
        <div className="properties">{renderCards}</div>
      </div>
      <div className="card-list">
        <h4>Seçilenler:</h4>
        {renderList}
      </div>
    </div>
  );
}
