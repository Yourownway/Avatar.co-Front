import React,{useContext, useState} from 'react'

import axios from 'axios'
import { AuthContext } from '../../../../../../../App';


export default function UserEditForm({userData,open,setOpen}) {
    const [userUpdateData, setUserUpdateData]=useState({...userData})
    const authValue = useContext(AuthContext)
    const token = localStorage.getItem('token')
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        }}


const [file,setFile] = useState(null)

     const handleChange = (event) => {
    const { name, value } = event.target;
    setUserUpdateData({
      ...userUpdateData,
      [name]: value,
    });

  };
  const handleSubmit = async (event) => {

      event.preventDefault();
 

  

       const res = await axios.patch(`/api/profil/${userData.id}/edit-user`, userUpdateData,config );

    
   
     await authValue.reducerDispatch({ type: "LOAD_USER", payload: res })
      

     
  };
    const handleSubmitImg = async (event) => {

      event.preventDefault();
 const data = new FormData;
 data.append('file',file)

       const res = await axios.patch(`/api/profil/${userData.id}/edit-image`, data);

     await authValue.reducerDispatch({ type: "LOAD_USER", payload: res })
 


     
  };


    return (
       <> 
         

          {open? (
<>
<div className="pageUser-profil-notification-header">
                <h1 className="font-menu">EDIT PROFIL</h1>
                 <button
                  className="btn"
                  onClick={() => {
                    setOpen(!open)
                  }}
                >
                  X
                </button>
                </div>

<div className="pageUser-profil-edit">
    
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
        name="postBadgeRequired"
        placeholder={userData.userDescription}
        value={userUpdateData.userDescription}
      />
     
      <button className="btn">Envoyer</button>
      </form>
      <form onSubmit={handleSubmitImg}   enctype="multipart/form-data">
         <input type='file' accept=".png" onChange={event=>{const file=event.target.files[0];
      setFile(file)}}  />
      <button className="btn">Envoyer</button>
      </form>
</div>
     </>     ):null}
  
        </>
    )
}