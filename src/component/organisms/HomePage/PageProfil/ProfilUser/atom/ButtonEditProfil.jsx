import React,{useContext, useState} from 'react'
import axios from 'axios'
import { AuthContext } from '../../../../../../App';

export default function UserEditForm({reducerUserData}) {
    const [userUpdateData, setUserUpdateData]=useState({...reducerUserData})
    const authValue = useContext(AuthContext)
const [open,setOpen] = useState(false)
     const handleChange = (event) => {
    const { name, value } = event.target;
    setUserUpdateData({
      ...userUpdateData,
      [name]: value,
    });

  };
  const handleSubmit = async (event) => {
      alert("ok")
    event.preventDefault();

       const res = await axios.patch(`/api/profil/${reducerUserData.id}/edit-user`, userUpdateData);

    

       alert("le profil a été modifier");
       await authValue.reducerDispatch({ type: "LOAD_USER", payload: res })
  

     event.preventDefault();
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
        placeholder={reducerUserData.firstName}
        value={userUpdateData.firstName}
      />
       <input
        onChange={handleChange}
        type="text"
        name="lastName"
        placeholder={reducerUserData.lastName}
        value={userUpdateData.lastName}
      />
       <input
        onChange={handleChange}
        type="text"
        name="userEmail"
        placeholder={reducerUserData.userEmail}
        value={userUpdateData.userEmail}
      />
       <input
        onChange={handleChange}
        type="text"
        name="userDescription"
        placeholder={reducerUserData.userDescription}
        value={userUpdateData.userDescription}
      />
         <input
        onChange={handleChange}
        type="text"
        name="postBadgeRequired"
        placeholder={reducerUserData.userDescription}
        value={userUpdateData.userDescription}
      />
      <button>Envoyer</button>
      </form>

          ):null}
  
        </div>
    )
}