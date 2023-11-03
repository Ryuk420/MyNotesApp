import React from "react";

function Header ({handleToggleDarkMode}) {
    return(
        <div className="header">
            <h1>My Notes Keeper</h1>
            <button onClick={()=> 
                handleToggleDarkMode(
                    (previousDarkMode)=>!previousDarkMode
                )
            }
             className="save">
            Toggle Dark/Light Mode</button>
        </div>
    );
}

export default Header;