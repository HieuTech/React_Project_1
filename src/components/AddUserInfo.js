import React, { useState } from "react";

const AddUserInfor =(props)=>{

    const [name, setName] = useState("hieu");
    const [address, setAddress] = useState('google');
    const [age, setAge] = useState(25);

   const handleOnChangeAge=(event)=>{
    setAge(event.target.value);    }
   const handleOnChangeInput=(event)=>{
    setName(event.target.value);      
}
    const handleOnSubmit =(event)=>{
        event.preventDefault();
        const randomNumber = Math.random() * 100;
        props.handleAddNewUser(
            {id: Math.ceil(randomNumber),
                age:age,
                name:name
            });
    }

    return(
        <div>
            {<p>Toi ten {name} nam nay toi {age} tuoi </p>}
            <form onSubmit={(event)=>{
                handleOnSubmit(event)
            }}>
            <label> Your name:</label>
<input type="text" value={name} onChange={(event)=> handleOnChangeInput(event)}/>

<label> Your Age:</label>

            <input type="text" value={age} onChange={(event)=> handleOnChangeAge(event)}/>
            <button >Submit</button>
            </form>
        </div>
    )

}

export default AddUserInfor