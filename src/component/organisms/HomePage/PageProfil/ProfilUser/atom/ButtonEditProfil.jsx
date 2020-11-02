import React,{useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../../../../../App';


export default function UserEditForm({userData}) {
    const [userUpdateData, setUserUpdateData]=useState({...userData})
    const authValue = useContext(AuthContext)
const [open,setOpen] = useState(false)
let history = useHistory()
     const handleChange = (event) => {
    const { name, value } = event.target;
    setUserUpdateData({
      ...userUpdateData,
      [name]: value,
    });

  };
  const handleSubmit = async (event) => {

    event.preventDefault();

       const res = await axios.patch(`/api/profil/${userData.id}/edit-user`, userUpdateData);

    

   
       await authValue.reducerDispatch({ type: "LOAD_USER", payload: res })
      history.push('/Home/Page/Profil/History')

     
  };


    return (
        <div>
          <button onClick={()=>setOpen(!open)}>Edit</button>

          {open? (

           <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="firstName"
        placeholder={userData.firstName}
         value={userUpdateData.firstName}
      />
       <input
        onChange={handleChange}
        type="text"
        name="lastName"
        placeholder={userData.lastName}
        value={userUpdateData.lastName}
      />
       <input
        onChange={handleChange}
        type="text"
        name="userEmail"
        placeholder={userData.userEmail}
        value={userUpdateData.userEmail}
      />
       <input
        onChange={handleChange}
        type="text"
        name="userDescription"
        placeholder={userData.userDescription}
        value={userUpdateData.userDescription}
      />
         <input
        onChange={handleChange}
        type="text"
        name="postBadgeRequired"
        placeholder={userData.userDescription}
        value={userUpdateData.userDescription}
      />
      <button>Envoyer</button>
      </form>

          ):null}
  
        </div>
    )
}