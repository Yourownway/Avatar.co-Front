import React,{useEffect,useState}  from 'react'
import {Route , Switch,} from 'react-router-dom'
import { getPostEvents, getPostUserEvent } from '../../../action'
import {useUser, usePostData} from '../../../Context/ContextProvider'

import ProfilNav from './atoms/ProfilNav'
import ProfilHistory from './ProfilHistory/ProfilHistory'
import ProfilNewPost from './ProfilNewPost/ProfilNewPost'
import ProfilUser from './ProfilUser/ProfilUser'

import usePageProfil from './usePageProfil'
export default function PageProfil() {
  const userData = useUser();
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
