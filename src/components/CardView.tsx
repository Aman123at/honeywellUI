import React, { useState } from "react";
import "../css/CardView.css";

function CardView({ value, setShowCard, handleEdit }: any) {
  const [showEdit, setShowEdit] = useState(false);
  const [newKey, setNewKey] = useState(value.key);
  const [newValue, setNewValue] = useState(value.value);

  return (
    <div>
      <div className="cardview">
        {showEdit ? (
          <div className="cardview">
            <input
              className="cardview__editInput"
              type="text"
              value={newKey}
              onChange={(e) => setNewKey(e.target.value)}
            />
            <input
              className="cardview__editInput2"
              type="text"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
            />
          </div>
        ) : (
          <>
            <p className="ml-4 cardview__value">{newKey}</p>
            <p className="mr-4 cardview__value">{newValue}</p>
          </>
        )}
      </div>
      <hr className="cardview__hr" />
      <div className="cardview">
        {showEdit ? (
          <button
            onClick={(e) => {
              handleEdit(e, newKey, newValue, value.id);
              setShowCard(false);
            }}
            type="button"
            className="btn btn-success ml-4"
          >
            Done
          </button>
        ) : (
          <button
            onClick={() => setShowEdit(true)}
            type="button"
            className="btn btn-primary ml-4"
          >
            EDIT
          </button>
        )}

        <button
          onClick={() => setShowCard(false)}
          type="button"
          className="btn btn-primary mr-4"
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}

export default CardView;
