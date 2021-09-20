import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "../css/Header.css";
import Body from "./Body";

function Header({ handleHide }: any) {
  const [showInsertCard, setShowInsertCard] = useState(Boolean);
  const [isSaveKey, setIsSaveKey] = useState(Boolean);
  const handleSaveKey = (e: any) => {
    setShowInsertCard(true);
    setIsSaveKey(true);
    handleHide(e);
  };

  return (
    <>
      <div className="header__main">
        <div className="header__left">
          <MenuIcon className="header__icons" />
          <h4>Honeywell</h4>
          <div className="header__pref">
            <p className="header__para">User Preferences</p>
          </div>
        </div>
        <div onClick={(e) => handleSaveKey(e)} className="header__right">
          <p className="header__saveKey">Save key</p>
        </div>
      </div>
      {showInsertCard && (
        <Body isSaveKey={isSaveKey} setIsSaveKey={setIsSaveKey} />
      )}
    </>
  );
}

export default Header;
