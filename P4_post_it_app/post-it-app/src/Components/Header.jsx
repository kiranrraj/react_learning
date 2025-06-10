import React from "react"


function Header(props) {
    return <header className={props.headerMainStyle}>
        <h2>{props.appName}</h2>
        <div className={props.headerSubStyle}>
            {props.children}
        </div>
        <button className={props.headerBtnStyle} onClick={props.onClick}>Create</button>
    </header>
}

export default Header