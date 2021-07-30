import { useState } from "react"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Prompt } from "react-router-dom"

const Home = () => {
    const[alr, setAlr] = useState(0)
    const Handler = () => {
        setAlr(alert("Welcome"))
    }
    const activeStyle = {color : "green"}
    return (
        <>
        <NavLink to="/" activeStyle={activeStyle}>Home</NavLink> | <NavLink to="/click" activeStyle={activeStyle}>Click</NavLink>
        <div className="jumbotron">
          <h1 onClick={Handler} value={alr}>This is Home page!</h1>
        <Link to="/click">Go to ClickME page</Link>  
        <Prompt when={true} message="Are you sure?"/>
        </div>
        
        </>
    )
}

export default Home;