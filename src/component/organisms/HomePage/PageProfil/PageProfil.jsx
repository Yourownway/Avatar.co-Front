import axios from 'axios'
import React,{useContext, useEffect,useReducer,useState}  from 'react'
import {Route , Switch,} from 'react-router-dom'
import { AuthContext } from '../../../../App'
import { usePostData } from '../../../Context/ContextProvider'


import ProfilNav from './atoms/ProfilNav'

import ProfilAllEvent from './ProfilEvent/ProfilAllEvent'
import ProfilNewPost from './ProfilNewPost/ProfilNewPost'
import ProfilUser from './ProfilUser/ProfilUser'


import ProfilMyEvent from './ProfilEvent/ProfilMyEvent'
import useMediaQuery from '../../../utils/useMediaQuery'


export default function PageProfil() {
    const phone = useMediaQuery("(max-width : 425px)")
const authValue = useContext(AuthContext)
const userData = authValue.reducerState.user

const PostData = usePostData()
const [postId,setPostId] = useState([])
const [postsEventsUser,setPostsEventsUser] = useState([])
const [usersProfilValidate, setUsersProfilValidate] = useState([])

  useEffect(() => {
   
  
  const fetchAllPostUser = async () => {
    //recupere tout les post ou l'utilisateur participe ou a crée


   //recupere tout les posts id 

const res = await axios.get(`/api/event/${userData.id}/postId`)
setPostId(res.data)
    if (postId.length>0){
      //je recupere les post ou l'user paticipe ou a crée avec les events de tout les users
  await axios
   .all(postId.map((postId) => axios.get(`/api/post/${postId.postId}/postById`))).then( 
    async (results)=>{const getData = await results.map((res) => res.data)
  setPostsEventsUser(getData)
})
    
if(postsEventsUser.length>0){

  //recupere tout les events valider 
  const getValidation = await postsEventsUser.map((event)=>event.Events.filter((eventData)=>eventData.eventValidation===true))

  await setUsersProfilValidate(getValidation)
}
}
  }
  fetchAllPostUser()


  }, [userData,postId.length,postsEventsUser.length,usersProfilValidate.length, PostData])


  
    return (
 <>

  <div className="pageUser">
  <div className="pageUser-event" >
      <ProfilNav />
     
      <Switch>
         <Route path="/Home/Page/Profil/AllEvent" exact>
         <ProfilAllEvent postDefaultData={postsEventsUser} eventsValidate={usersProfilValidate}/> 
        </Route>  
<Route path="/Home/Page/Profil/MyEvent" exact>
  <ProfilMyEvent/>
</Route>
        <Route
          path="/Home/Page/Profil/NewPost"
          exact
       component={ProfilNewPost}
        />
      </Switch>
      </div>
      {/* mettre une condition avec une route  */}
    {phone? null:( <ProfilUser postsEventsUser={postsEventsUser}/>)} 
    </div>

   </>
    )
}
