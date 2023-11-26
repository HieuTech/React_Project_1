
import axios from '../utils/axiosCustomize';


const postCreateNewUser = async (email,password,user,role,image)=>{

    const data = new FormData();
    data.append('email', email);
    data.append('password',password);
    data.append('username',user)
    data.append('role',role);
    data.append('userImage',image);
    return  axios.post('/api/v1/participant',data);

}

const getAllUser = ()=>{
    return axios.get('/api/v1/participant/all')
}

const updateUser = async (id,user,role,image)=>{
    const data = new FormData();
    data.append('id',id);
    data.append('username',user);
    data.append('role',role);
    data.append('userImage',image);
    return axios.put('/api/v1/participant',data)
}

const deleteUser = (userId)=>{
    //form urlencoded thì phải truyền vào 1 object

    return axios.delete("/api/v1/participant",{data:{id:userId}})
}
export {postCreateNewUser, getAllUser,updateUser,deleteUser}