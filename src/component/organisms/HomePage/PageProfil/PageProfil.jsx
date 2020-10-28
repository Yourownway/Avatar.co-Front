import axios from 'axios'
import React,{useContext, useEffect,useReducer,useState}  from 'react'
import {Route , Switch,} from 'react-router-dom'
import { AuthContext } from '../../../../App'


import ProfilNav from './atoms/ProfilNav'
import ProfilHistory from './ProfilHistory/ProfilHistory'

import ProfilUser from './ProfilUser/ProfilUser'



export default function PageProfil() {
const authValue = useContext(AuthContext)
const userData = authValue.reducerState.user

const [allPostUser, setAllPostUser] = useState([])
const [eventsPostUser,setEventsPostUser] = useState([])
  useEffect(() => {
   
   
  const fetchAllPostUser = async () => {
    //recupere tout les post ou l'utilisateur participe ou a crée
    const res = await axios.get(`/api/event/${userData.id}/getAllPostUser`)

    if (res) {
setAllPostUser(res.data)
   //recupere tout les posts id
   if(allPostUser.length>0){
     const postIds = await allPostUser.map((event) => event["Events.postId"])
    if (postIds.length>0){
      //enfin je recupere tout les events de chaque post dans le meme ordre
  await axios
   .all(postIds.map((postId) => axios.get(`/api/getEvents/postId/${postId}`))).then( 
    async (results)=>{const getData = await results.map((res) => res.data.Post)
  setEventsPostUser(getData)

  })


    }
   }
  
  

    }
  }
  fetchAllPostUser()

  }, [userData.id,allPostUser.length ])


  
    return (
 <>

               <div className="profilPageUser-Container">
      <ProfilNav />
      <Switch>
         <Route path="/Home/Page/Profil/History" exact>
          <ProfilHistory allPostUser={allPostUser} eventsPostUser={eventsPostUser}/>
        </Route>  

        <Route
          path="/Home/Page/Profil/Post"
          exact
       
        />
      </Switch>
      <ProfilUser />
    </div>

   </>
    )
}
