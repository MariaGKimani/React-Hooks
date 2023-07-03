import React from "react";
import './style.css'

function Navigation() {
    return(
        <div>
            <nav className="navbar">
                
                    <a href="/Home"><li>Home</li></a>
                    <a href="/Login"><li>Login</li></a>             
            </nav>
        </div>
    )
}
export default Navigation