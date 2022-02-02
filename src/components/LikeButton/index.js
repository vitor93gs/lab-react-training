import { useState } from "react";
import styles from './styles.module.css'
export function LikeButton(){
    const arr = ['purple','blue','green','yellow','orange','red']
    
    const [count, setCount] = useState(0);

    function handleCounter (){
        setCount(count+1)
    }

    var buttonStyle = {
        backgroundColor : arr[count<6? count : count%6]
    }

    return(
        <button style={buttonStyle} className={styles.button} onClick={handleCounter}> {count} Likes!</button>
    )

}