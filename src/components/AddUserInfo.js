import React from "react";

class AddUserInfor extends React.Component{
    state = {
        name:'hieu san',
        address:"google",
        age:25
    }

   
    handleOnChangeAge=(event)=>{
        this.setState({
            age:event.target.value
        })
    }
    handleOnChangeInput=(event)=>{
        this.setState({
            name: event.target.value
        })

    }
    handleOnSubmit =(event)=>{
        event.preventDefault();
        const randomNumber = Math.random() * 100;
        this.props.handleAddNewUser({
            id:Math.ceil(randomNumber),
            name: this.state.name,
            age: this.state.age
        });
    }
    
    render(){

        
        return(
            <div>
                {<p>Toi ten {this.state.name} nam nay toi {this.state.age} tuoi </p>}
                <form onSubmit={(event)=>{
                    this.handleOnSubmit(event)
                }}>
                <label> Your name:</label>
<input type="text" value={this.state.name} onChange={(event)=> this.handleOnChangeInput(event)}/>

<label> Your Age:</label>

                <input type="text" value={this.state.age} onChange={(event)=> this.handleOnChangeAge(event)}/>
                <button >Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfor