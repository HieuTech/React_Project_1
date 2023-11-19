import React from "react";
import AddUserInfor from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component{
   state={
    listUser: [
        // {id:1, name:"hieu", age:"18"},
        // {id:2, name:"Rosa", age:"15"},
        // {id:3, name:"Suong", age:"64"},
        // {id:4, name:"Tue An", age:"22"}
    ]
   }
   handleAddNewUser=(userObj)=>{
    let newList = this.state.listUser
    newList =newList.unshift(userObj);
    console.log(newList);
    // this.setState({
    //     listUser: [userObj, ...this.state.listUser]
    // })

   
   }
    render(){

        return(
            <div>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser}/>
                <br/>
                <DisplayInfo listUser={this.state.listUser}  />
                
            </div>
        )
    }
    //tập hợp các khối html và chuyển thành giao diện
}

export default MyComponent;