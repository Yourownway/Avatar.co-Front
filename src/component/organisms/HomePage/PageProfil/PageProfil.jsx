import axios from 'axios'
import React,{useContext, useEffect,useReducer,useState}  from 'react'
import {Route , Switch,} from 'react-router-dom'
import { AuthContext } from '../../../../App'
import { usePostData } from '../../../Context/ContextProvider'


import ProfilNav from './atoms/ProfilNav'
import ProfilHistory from './ProfilHistory/ProfilHistory'
import ProfilNewPost from './ProfilNewPost/ProfilNewPost'
import ProfilUser from './ProfilUser/ProfilUser'



export default function PageProfil() {
const authValue = useContext(AuthContext)
const userData = authValue.reducerState.user
const postData = usePostData()
const [allPostUser, setAllPostUser] = useState([])
const [postsEventsUser,setPostsEventsUser] = useState([])
const [postId,setPostId] = useState([])
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
    async (results)=>{const getData = await results.map((res) => res.data.post)
  setPostsEventsUser(getData)
 console.log(getData,'updateeeee')})
    
if(postsEventsUser.length>0){

  //recupere tout les events valider 
  const getValidation = await postsEventsUser.map((event)=>event.Events.filter((eventData)=>eventData.eventValidation===true))
console.log(getValidation,'getValidation')
  await setUsersProfilValidate(getValidation)
}
}
  }
  fetchAllPostUser()
  console.log(usersProfilValidate, 'userProfilValidate')

  }, [userData.id,postId.length,postsEventsUser.length,usersProfilValidate.length])


  
    return (
 <>

               <div className="profilPageUser-Container">
      <ProfilNav />
      <Switch>
         <Route path="/Home/Page/Profil/History" exact>
         <ProfilHistory postDefaultData={postsEventsUser} eventsValidate={usersProfilValidate}/> 
        </Route>  

        <Route
          path="/Home/Page/Profil/Post"
          exact
       component={ProfilNewPost}
        />
      </Switch>
      <ProfilUser />
    </div>

   </>
    )
}
