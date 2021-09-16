import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css';
function Header() {
    return (
        <div className="header__main">
            <div className="header__left">
                <MenuIcon style={{margin:"20px"}} />
                <h4>Honeywell</h4>
                <div className="header__pref">
                    <p className="header__para">User Preferences</p>
                </div>
            </div>
            <div className="header__right">
                <p style={{marginTop:'10px'}}>Save key</p>
            </div>
        </div>
    )
}

export default Header

