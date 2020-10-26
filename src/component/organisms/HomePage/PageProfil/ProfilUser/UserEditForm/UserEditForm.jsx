import React,{useContext, useState} from 'react'
import axios from 'axios'
import { AuthContext } from '../../../../../../App';
import { useUserUpdate } from '../../../../../Context/ContextProvider';
export default function UserEditForm({reducerUserData}) {
    const [userUpdateData, setUserUpdateData]=useState({...reducerUserData})
    const authValue = useContext(AuthContext)
    const updateUser = useUserUpdate()
  
     const handleChange = (event) => {
    const { name, value } = event.target;
    setUserUpdateData({
      ...userUpdateData,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
      console.log('useState',userUpdateData)
    event.preventDefault();
    console.log("event", event);
    const res = await axios.patch(`/api/profil/${reducerUserData.userId}/edit-user`, userUpdateData);
    console.log("USERUPDATEDATA", res.status);
    if (res.status === 200) {
     console.log(res)
      await alert("le profil a été modifier");
       await authValue.reducerDispatch({ type: "LOAD_USER", payload: res })
    
    
    }
  };
  console.log('UPPPPPPPPPPPPPP')

    return (
        <div>
             <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="firstName"
        placeholder={userUpdateData.firstName}
        value={userUpdateData.firstName}
      />
       <input
        onChange={handleChange}
        type="text"
        name="lastName"
        placeholder={userUpdateData.lastName}
        value={userUpdateData.lastName}
      />
       <input
        onChange={handleChange}
        type="text"
        name="userEmail"
        placeholder={userUpdateData.userEmail}
        value={userUpdateData.userEmail}
      />
       <input
        onChange={handleChange}
        type="text"
        name="userDescription"
        placeholder={userUpdateData.userDescription}
        value={userUpdateData.userDescription}
      />
      <button>Envoyer</button>
      </form>
        </div>
    )
}
