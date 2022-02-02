import { useState } from "react";

export function Carousel(props){
    const [num, setNum] = useState(0);
    const src = `${props.images[num]}`                                                                                        
    function troca1(){
        if(num===3){
            setNum(0)
        }
        else{
            setNum(num+1)
        }
    }
    function troca2(){  
    
        if(num===0){
            setNum(3)
        }
        else{
            setNum(num-1)
        }
    }
    
    return(
    <div>
        <button onClick={troca1}>
            LAST
        </button>
        <img src={src} alt=""/>
        <button onClick={troca2} >
            NEXT
        </button>
    </div>
    )
}