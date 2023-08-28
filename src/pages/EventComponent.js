import {useState} from "react";

function Name(){
    let [name,setname]=useState();


    function send(){
        alert(name);
    }

    return(
        <form action="">
            <input type="text" onChange={(event)=>setname(event.target.value)} />
            <button onClick={send}>Send data</button>
        </form>
    )
}

export default  Name;