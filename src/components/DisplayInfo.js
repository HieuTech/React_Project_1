
import React from "react";
import "./Displayinfor.scss"
import { useState } from "react";
const DisplayInfo = (props) =>{

    const [isShowListUser, setIsListUser] = useState(true);

   const handleShowHide=(event)=>{
    console.log(props.listUser);

        setIsListUser(!isShowListUser);
       
    }

    return(
        <div className="display-infor-container">
            <div >
                <p onClick={()=>{
                    handleShowHide()
                }}> {isShowListUser === true? "Hide list user" : "Show list user"} </p>
            </div>
            {isShowListUser && 
            <div>
               { props.listUser.map((item)=>{
                return(
                    <div className={+item.age > 20 ? "green" : "red"} key={item.id}>

                                <p>ten toi la: {item.name}</p>
                                <p>tuoi toi la: {item.age}</p>
                            </div>
                )
                })}
            </div>}
        </div>
    )
}

export default DisplayInfo;