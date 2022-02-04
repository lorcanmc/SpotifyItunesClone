import react from "react";
import { useState } from "react/cjs/react.development";

const Input = ({query,setQuery})=>{
    const[text,setText]=useState("")
    function handleChange(e){
        setText(e.target.value)
        console.log(text)
    }
    function handleClick(e){
        e.preventDefault()
        setQuery(text.split(" ").join("+"))
        console.log(text)
    }    
    return(
        <form>
        <input onChange={handleChange}/>
        <button type="submit" onClick={handleClick}>Submit</button>
        </form>
    )
}

export default Input