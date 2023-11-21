import ModalCreateUser from "./ModalCreateUser"
import "./ManageUser.scss"
const ManageUser =()=>{

    return (
        <div className="manage-user-container">
                <div className="title">
                    <h3>Manage User</h3>
                </div>
                <div className="users-content">
                    <div>
                        <button>Add new user</button>
                    </div>
                    <div>
                        Table users
                    </div>
                <ModalCreateUser/>;

                </div>


        </div>
    )
}

export default ManageUser