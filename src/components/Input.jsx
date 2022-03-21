import { useState } from "react";
export default function Input({item}){
const [input,setInput]=useState("");
    const changeInput=(e)=>{
        setInput(e.target.value)
    }
    return(  
        <input value={input} onChange={changeInput}  name={item} type={item} id={`input-${item}`} className="input" 
        placeholder={item=="email"?`Enter your ${item} address`:`Enter your ${item}`} />
        
    )
}