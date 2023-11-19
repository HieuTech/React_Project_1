import React, { useState } from "react";
import AddUserInfor from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

//    state={
//     listUser: [
        // {id:1, name:"hieu", age:"18"},
        // {id:2, name:"Rosa", age:"15"},
        // {id:3, name:"Suong", age:"64"},
        // {id:4, name:"Tue An", age:"22"}
//     ]
//    }

//    handleAddNewUser=(userObj)=>{
//     this.setState({
//         listUser: [userObj, ...this.state.listUser]
//     })
//    }
//    handleDeleteUser = (userId) =>{
//     let listUserClone = [...this.state.listUser];
//     listUserClone = listUserClone.filter(item => item.id !== userId)
//      this.setState({
//          listUser: listUserClone
//      })
// }
    
    //tập hợp các khối html và chuyển thành giao diện

const MyComponent = (props) =>{
    
    const [listUser, setListUser] = useState(
      [
        {id:1, name:"hieu", age:"18"},
        {id:2, name:"Rosa", age:"15"},
        {id:3, name:"Suong", age:"64"}
      ]  
    );
        console.log(listUser);
    const handleAddNewUser=(userObj)=>{
        setListUser([userObj,...listUser]);
       }
    
       const handleDeleteUser = (userId) =>{
        let listUserClone = listUser;
        listUserClone = listUserClone.filter(item => item.id !== userId)
         setListUser(listUserClone);
    }
    return(
        <div>
            <AddUserInfor handleAddNewUser={handleAddNewUser} />
            <br/>
            <DisplayInfo listUser={listUser} 
            handleDeleteUser={handleDeleteUser}
              />
            
        </div>
    )

}


export default MyComponent;