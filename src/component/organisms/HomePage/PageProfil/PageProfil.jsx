import axios from 'axios'
import React,{useContext, useEffect,useReducer,useState}  from 'react'
import {Route , Switch,} from 'react-router-dom'
import { AuthContext } from '../../../../App'
import { getPostEvents, getPostUserEvent,getPostUserEvent2} from '../../../action'
import {useUser, usePostData} from '../../../Context/ContextProvider'

import ProfilNav from './atoms/ProfilNav'
import ProfilHistory from './ProfilHistory/ProfilHistory'
import ProfilNewPost from './ProfilNewPost/ProfilNewPost'
import ProfilUser from './ProfilUser/ProfilUser'

const initialState = {

eventsUser: null

}
 const reducerUserEvent = (state, action) => {
  console.log("ICI ACTION :", action);
  switch (action.type) {
    case "LOAD_EVENT":
      

      return {
        ...state,
        postUser: action.payload,
      };

    default:
      return state;
  }
 }
export const EventUserContext = React.createContext()


export default function PageProfil() {

 const [state, dispatch] = useReducer(reducerUserEvent, initialState)

const authValue = useContext(AuthContext)
const userData = authValue.reducerState.user
  const postData = usePostData();
  const [postUser, setPostUser] = useState([]); 
    const [eventsPostUser, setEventsPostUser] = useState([]);


// useEffect(()=>{
// const fetchEventUser = async()=> {



// if(res){
// //!!!!changer le name si export 
// dispatch({type:'LOAD_EVENT', playload: res})

// }

// }

// fetchEventUser()


// },[])





     useEffect(() => {
    getPostUserEvent2(userData);
  }, []);


      useEffect(() => {
    getPostUserEvent(userData, setPostUser, 'PAGE PROFIL 1 get PostUserEvent');
  }, [userData, postData]);
    useEffect(() => {
    getPostEvents(postUser, setEventsPostUser,'PAGE PROFIL 2 getPosts Events');
  }, [userData,postUser]);

  
    return (
 <>
<EventUserContext.Provider value={{reducerEvent: state, dispatchEvent: dispatch }}>
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
   </EventUserContext.Provider>
   </>
    )
}
