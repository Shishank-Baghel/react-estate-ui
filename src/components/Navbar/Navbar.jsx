import { useState } from "react"
import "./Navbar.scss"

function Navbar(){
    const [open, setOpen] = useState(false);
    return(
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>Shishank Properties</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                <a href="/">Sign In</a>
                <a href="/" className="register">Sign Up</a>
            </div>
            <div className="menuIcon">
                <img src="/menu.png" alt="" onClick={()=>setOpen(!open)} />
                
            </div>
            <div>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign in</a>
            <a href="/">Sign up</a>
            </div>
        </nav>
    )
}

export default Navbar