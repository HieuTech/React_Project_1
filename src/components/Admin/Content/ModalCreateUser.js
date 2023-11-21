import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img1 from "../../../assets/img1.jpg"
import { FiFilePlus } from "react-icons/fi";
import { upload } from '@testing-library/user-event/dist/upload';
const ModalCreateUser = () => {

  const [show,setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [previewImage, setPreviewImage] = useState("");
    const     handleUpLoadImage = (event)=>{
        //ng dùng k upload thì == null
        if(event.target && event.target.files && event.target.files[0]){
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
        }else{
            setPreviewImage(null)
        }
       
       
        // setImage(event.target.files[0].name)
    }

  return (
    <>
      <Button variant="primary" onClick={handleShow}
      >
        Launch demo modal
      </Button>

      <Modal size="xl" show={show} onHide={handleClose}
        backdrop="static" className='modal-add-user'
>   
        <Modal.Header closeButton>
          <Modal.Title >Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body><form class="row g-3">
  <div className="col-md-6">
    <label  className="form-label">Email</label>
    <input type="email" className="form-control" value={email}
    onChange={(event)=>{
        setEmail(event.target.value);
    }}
    />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" value={password}
    onChange={(event)=>{
        setPassword(event.target.value)
    }} />
  </div>
  
  <div className="col-md-6">
    <label  className="form-label">UserName</label>
    <input type="text" className="form-control" value={user}
    onChange={(event)=>{
        setUsername(event.target.value);
    }}
    />
  </div>
  <div className="col-md-4">
    <label  className="form-label">{role}</label>
    <select  className="form-select" onChange={(event)=>{
        setRole(event.target.value)
    }}>
      <option  value="USER">User</option>
      <option value="ADMIN">ADMIN</option>
    </select>
  </div>
  <div className='col-md-12 '>
    <label className='form-label label-upload' htmlFor='labelUpload'> Upload Image File</label>
    <FiFilePlus />

  <input type="file" hidden id='labelUpload'
  onChange={(event)=>{
    handleUpLoadImage(event)
  }}
  />

  </div>
  <div className="col-md-12 img-preview">
    {previewImage ? 
        <img src={previewImage} className='img__content' alt="modal"></img>

          :
    <span>Preview Image</span>

}
  </div>
  
</form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalCreateUser;