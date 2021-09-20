import React, { useState } from "react";
import "../css/Body.css";
import Rows from "./Rows";
import CardView from "./CardView";
import CardViewSaveKey from "./CardViewSaveKey";

function Body({ isSaveKey, setIsSaveKey, hide, setHide, handleHide }: any) {
  const [allData, setAllData] = useState([
    { id: 79, key: "Testing", value: "11" },
    { id: 35, key: "sbuhrl.default", value: "6+6" },
    { id: 39, key: "Test2", value: "3+9" },
    { id: 40, key: "Test3", value: "4+8" },
    { id: 41, key: "Test4", value: "5+7" },
    { id: 49, key: "testing", value: "8+4" },
  ]);

  const [showCard, setShowCard] = useState(false);
  const [cardData, setCardData] = useState();
  const handleClickView = (e: any, value: any) => {
    e.preventDefault();
    setShowCard(true);
    setCardData(value);
  };

  const handleInsert = (key: string, value: string, e: any) => {
    e.preventDefault();
    setAllData([
      ...allData,
      {
        id: Math.random(),
        key,
        value,
      },
    ]);
    setIsSaveKey(false);
  };

  const handleDelete = (e: any, id: number) => {
    e.preventDefault();
    setAllData(allData.filter((item) => item.id.toString() !== id.toString()));
  };

  const handleEdit = (e: any, key: string, value: string, id: Number) => {
    e.preventDefault();
    allData.map((item) => {
      if (item.id === id) {
        item.key = key;
        item.value = value;
      }
    });
  };

  return (
    <div className="body">
      <div className="body__main">
        <table className="table table-borderless ">
          <thead>
            <tr>
              <th scope="col">KEY</th>
              <th scope="col">VALUE</th>
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((val: object) => (
              <Rows
                handleDelete={handleDelete}
                value={val}
                handleClickView={handleClickView}
              />
            ))}
          </tbody>
        </table>
      </div>

      {showCard && (
        <div className="body__right">
          <CardView
            handleEdit={handleEdit}
            setShowCard={setShowCard}
            value={cardData}
          />
        </div>
      )}
      {isSaveKey && (
        <div className="body__right">
          <CardViewSaveKey
            handleInsert={handleInsert}
            allData={allData}
            setAllData={setAllData}
            setIsSaveKey={setIsSaveKey}
          />
        </div>
      )}
    </div>
  );
}

export default Body;
