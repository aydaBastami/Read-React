import { useState } from "react";

const Counter = () => {
 const[num,setNum] = useState(0)
 const[name,setName] = useState(" ")
 const chanageHandler = (e) => {
    setName(e.target.value)
    console.log(name);
 }
    return(
        <div>
            <p>You Clicked Me {num} Time!</p>
            <button onClick={()=>setNum(num+1)}>Click ME</button>
            <input onChange={chanageHandler} name="name" value={name}/>
        </div>
    )
} 
export default Counter;