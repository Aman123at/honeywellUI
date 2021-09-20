import React, { useState } from "react";
import "./css/App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  const [hide, setHide] = useState(Boolean);
  const handleHide = (e: any) => {
    e.preventDefault();
    setHide(true);
  };
  return (
    <div>
      <Header handleHide={handleHide} />
      {!hide && <Body hide={hide} setHide={setHide} />}
    </div>
  );
}

export default App;
