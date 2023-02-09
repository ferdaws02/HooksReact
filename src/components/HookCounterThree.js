import React ,{useState}from 'react';

function HookCounterThree() {
    const[name,setName]=useState({firstName:'',lastName:''})
    return (
        <div>
           <form>
            <input type="text"
            value={name.firstName}
            onChange={e=> setName({firstName: e.target.value})}/>
            <input type="text" 
            value={name.lastName}
             onChange={e=> setName({lastName: e.target.value})}/>
            <h2>your first name is : {name.firstName}</h2>
            {/*the first and the last name updated while typing*/}
            <h2>your last name is : {name.lastName}</h2>
            </form> 
        </div>
    );
}

export default HookCounterThree;