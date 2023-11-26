import ModalCreateUser from "./ModalCreateUser"
import "./ManageUser.scss"
import { IoMdAddCircle } from "react-icons/io";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser"
import ModalDeleteUser from "./ModalDeleteUser";
const ManageUser =()=>{
    const [show,setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false)
    const [listUser, setListUser] = useState([
    ])
    const [dataUpdate, setDataUpdate] = useState({})
    const [dataDelete, setDaTaDelete] = useState({})
    const [showView, setShowView] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    useEffect(() => {
        // You can await here
      fetchListUser();
      }, []);

    const fetchListUser = async ()=>{
      let res = await getAllUser();
      if(res.EC === 0){
        setListUser(res.DT)
      }
    }
   
    const handleClickBtnUpdate = async(item)=>{
        setShowUpdate(!showUpdate)
        setDataUpdate(item)

    }
    const handleViewUser= async(item)=>{
        setShowView(!showView)
        setDataUpdate(item)
    }
    const resetUpdateData = ()=>{
        setDataUpdate({})

    }

    const handleClickDelete = (item)=>{
        setShowDelete(!showDelete)
        setDaTaDelete(item)
    }
   

    return (
        <div className="manage-user-container">
                <div className="card-title">
                    <h3>Manage User</h3>
                </div>
                <div className="users-content">

                        <button className="btn-addNew"
                        onClick={()=> setShow(true)
                        }
                        >
                    <IoMdAddCircle />
                        Add new user </button>

                    <div className="table-users-container">
                        <TableUser listUser={listUser}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleViewUser={handleViewUser}
                        handleClickDelete={handleClickDelete}
                        />
                        
                    </div>
                    <ModalCreateUser show={show} setShow={setShow}
                    fetchListUser={fetchListUser}
                    />
                   
                    <ModalUpdateUser
                        showUpdate={showUpdate}
                        setShowUpdate={setShowUpdate}
                        dataUpdate = {dataUpdate}
                        fetchListUser={fetchListUser}
                        resetUpdateData={resetUpdateData}
                    />
                    
                    <ModalViewUser setShowView={setShowView}
                    showView={showView}
                    dataUpdate={dataUpdate}
                    resetUpdateData={resetUpdateData}
                    fetchListUser={fetchListUser}
                    />

                        <ModalDeleteUser
                        showDelete={showDelete}
                        setShowDelete={setShowDelete}
                        dataDelete={dataDelete}
                        fetchListUser={fetchListUser}

                        />
                   
                </div>


        </div>
    )
}

export default ManageUser