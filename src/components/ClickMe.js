import { useState } from "react";
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

const ClickME = () => {
    const[num,setNum] = useState(0)
    const activeStyle = {color : "green"}
    return (
        <>
     <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink> | <NavLink to="/click" activeStyle={activeStyle}>Click</NavLink>
        <div className="jumbotron">
          <h3>you clicked me {num} time!</h3>
        <button onClick={()=>setNum(num+1)}>Click ME</button> <br></br>
        <Link to="/">Go to Home page</Link>  
        </div>
        
        </>
    )
}
export default ClickME;