import React, { useState } from "react";

function CardViewSaveKey({ setIsSaveKey, handleInsert }: any) {
  const [newKey, setNewKey] = useState(String);
  const [newValue, setNewValue] = useState(String);

  return (
    <div>
      <div className="cardview">
        <div className="cardview">
          <input
            className="cardview__editInput"
            type="text"
            value={newKey}
            placeholder="Enter New Key"
            required
            onChange={(e) => setNewKey(e.target.value)}
          />
          <input
            className="cardview__editInput2"
            type="text"
            value={newValue}
            required
            placeholder="Enter New Value"
            onChange={(e) => setNewValue(e.target.value)}
          />
        </div>
      </div>
      <hr className="cardview__hr" />
      <div className="cardview">
        <button
          onClick={(e) => handleInsert(newKey, newValue, e)}
          type="submit"
          className="btn btn-success ml-4"
          disabled={!newKey}
        >
          INSERT
        </button>

        <button
          onClick={() => setIsSaveKey(false)}
          type="button"
          className="btn btn-primary mr-4"
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}

export default CardViewSaveKey;
