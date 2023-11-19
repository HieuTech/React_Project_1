import React, { useEffect, useState } from "react";
import "./Displayinfor.scss"

const DisplayInfor = (props) =>{
    const {listUser} = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handleShowHideListUser= ()=>{
        setShowHideListUser(!isShowHideListUser)
    }

    useEffect(()=>{
        console.log("use effect");
        if(listUser.length === 5)
        console.log("your user = 5");
    },[listUser])

        return(
            <div className="display-infor-container">
              <div>
                  
                  <span onClick={()=>{
                      handleShowHideListUser()
                  }}>{isShowHideListUser === true? "Hide List User" : "Show List User"}</span>
                  </div>  
                {isShowHideListUser && 
                <div>
                   { listUser.map((item)=>{
                    return(
                        <div className={+item.age > 20 ? "green" : "red"} key={item.id}>

                                    <p>ten toi la: {item.name}</p>
                                    <p>tuoi toi la: {item.age}</p>
                            <button onClick={()=>{
                                props.handleDeleteUser(item.id)
                            }}>DELETE</button>
                        </div>

                    )
                    })}
                </div>}
            </div>
        )
    }


export default DisplayInfor;
