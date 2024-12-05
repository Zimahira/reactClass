import { useState } from "react";

function MyButton(){
    let [count, setAdd] = useState(0)

    const handleClick = () => {
        setAdd(count+1)
    }

    return <button onClick={handleClick}>{count}</button>
}

export default MyButton;

    
