import React from "react";
import "./Displayinfor.scss"
class DisplayInfo extends React.Component{
    state = {
        isShowListUser :true
    }
    handleShowHide=(event)=>{
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
       
    }
    render(){
    const {listUser} = this.props;
        return(
            <div className="display-infor-container">
                <div >
                    <p onClick={()=>{
                        this.handleShowHide()
                    }}> {this.state.isShowListUser === true? "Hide list user" : "Show list user"} </p>
                </div>
                {this.state.isShowListUser && 
                <div>
                   { listUser.map((item)=>{
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
}

export default DisplayInfo;