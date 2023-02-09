import React,{useState} from 'react';

function HookCounterTwo() {
    const initialCount =0
    const[count,setCount] = useState(initialCount)
   const incrementFive=()=>{
    for(let i=0 ;i<5;i++){
        setCount(pCou=>pCou+1)
    }
   }
   
   
   
    return (
        <div>
            count:{count}
            <button onClick={()=>setCount(initialCount)}>Rest</button>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={incrementFive}>Increment5</button>
        </div>
    );
}

export default HookCounterTwo;