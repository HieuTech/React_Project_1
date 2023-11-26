import { useEffect } from "react";
import { deleteUser} from"../../../services/apiService";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';

const ModalDeleteUser= (props)=> {
  const {showDelete, setShowDelete,dataDelete,fetchListUser} = props;

  const handleClose = () => 
  {
    setShowDelete(false);
  }

  const handleDeleteUser= async()=>{
        let data = await deleteUser(dataDelete.id);
        if( data&& data.EC === 0){
            toast.success(data,{position:"top-center"});
            handleClose();
            await fetchListUser(); 
        }
    
        if(data && data.EC !== 0){
            toast.error(data,{
                position:"top-center",
            })
        }
  }
  return (
    <>
     
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete email: {dataDelete.email} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <ToastContainer/>
          <Button variant="primary" onClick={()=>{
            handleDeleteUser()
          }}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;