import React,{useState} from 'react';

function HookCounter() {
    //count is the state variable 
    //setCount update the state variable
   const[count,setCount]= useState(0) // array destructuring
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count{count}</button>
        </div>
    );
}

export default HookCounter;

/*Rules of hooks
1-call a hook at the top level:
    -don't call hooks inside loops,conditions,or nested functions
2-call Hooks from React functions:
    -Call them from within React functioonal components and not
    any regular JS function
*/