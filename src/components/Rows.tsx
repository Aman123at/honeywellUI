import React from "react";
import "../css/Rows.css";

function Rows({ value, handleClickView, handleDelete }: any) {
  return (
    <tr>
      <td>{value.key}</td>
      <td>{value.value}</td>
      <td className="rows__tableData">
        <button
          onClick={(e) => handleClickView(e, value)}
          type="button"
          className="btn btn-primary"
        >
          VIEW
        </button>
        <button
          onClick={(e) => handleDelete(e, value.id)}
          type="button"
          className="btn btn-primary ml-2"
        >
          DELETE
        </button>
      </td>
    </tr>
  );
}

export default Rows;
