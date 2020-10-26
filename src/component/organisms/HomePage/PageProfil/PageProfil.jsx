import React,{useContext, useEffect,useState}  from 'react'
import {Route , Switch,} from 'react-router-dom'
import { AuthContext } from '../../../../App'
import { getPostEvents, getPostUserEvent } from '../../../action'
import {useUser, usePostData} from '../../../Context/ContextProvider'

import ProfilNav from './atoms/ProfilNav'
import ProfilHistory from './ProfilHistory/ProfilHistory'
import ProfilNewPost from './ProfilNewPost/ProfilNewPost'
import ProfilUser from './ProfilUser/ProfilUser'


export default function PageProfil() {
const authValue = useContext(AuthContext)
const userData = authValue.reducerState.user
  const postData = usePostData();
  const [postUser, setPostUser] = useState([]); 
    const [eventsPostUser, setEventsPostUser] = useState([]);

    
      useEffect(() => {
    getPostUserEvent(postData, userData, setPostUser, "Events.userId",'POSTDATA');
  }, [userData, postData]);
    useEffect(() => {
    getPostEvents(postUser, setEventsPostUser,'!!!!!!!!!!!PROFIL==========');
  }, [userData, postUser, postData]);

  
    return (
 
               <div className="profilPageUser-Container">

      <ProfilNav />
      <Switch>
         <Route path="/Home/Page/Profil/History" exact>
          <ProfilHistory eventsPostUser = {eventsPostUser} postUser={postUser} />
        </Route>  

        <Route
          path="/Home/Page/Profil/Post"
          exact
          component={ProfilNewPost}
        />
      </Switch>
      <ProfilUser  eventsPostUser={eventsPostUser}/>
    </div>
   
    )
}
