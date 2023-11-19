// import React from "react";
// import AddUserInfor from "./AddUserInfo";
// import DisplayInfo from "./DisplayInfo";
// import { useState } from "react";
// class MyComponent extends React.Component{
//    state={
//     listUser: [
//         {id:1, name:"hieu", age:"18"},
//         {id:2, name:"Rosa", age:"15"},
//         {id:3, name:"Suong", age:"64"},
//         {id:4, name:"Tue An", age:"22"}
//     ]
//    }
//    handleAddNewUser=(userObj)=>{
  
//     this.setState({
//         listUser: [userObj, ...this.state.listUser]
//     })
//    }
//     render(){

//         return(
//             <div>
//                 <AddUserInfor handleAddNewUser={this.handleAddNewUser}/>
//                 <br/>
//                 <DisplayInfo listUser={this.state.listUser}  />
                
//             </div>
//         )
//     }
//     //tập hợp các khối html và chuyển thành giao diện
// }

// export default MyComponent;

import React from "react";
import AddUserInfor from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
import { useState } from "react";

const MyComponent=(props) =>{

    const [listUser, setListUser] = useState(
    [{id:1, name:"hieu", age:"18"},
    {id:2, name:"Rosa", age:"15"},
    {id:3, name:"Suong", age:"64"},
    {id:4, name:"Tue An", age:"22"}]
    )

    const handleAddNewUser=(userObj)=>{
        setListUser([userObj, ...listUser]);
       }

       return(
        <div>
            <AddUserInfor handleAddNewUser={handleAddNewUser}/>
            <br/>
            <DisplayInfo listUser={listUser}  />
            
        </div>
    )
}

export default MyComponent;