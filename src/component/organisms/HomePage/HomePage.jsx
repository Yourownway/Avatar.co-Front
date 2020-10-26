import React,{useEffect,useContext} from 'react'
import {Route , Switch} from 'react-router-dom'
import Header from './molecules/Header'
import axios from 'axios'
import {AuthContext} from '../../../App'



import PageProfil from './PageProfil/PageProfil'
import PageTraining from './PageTraining/PageTraining'
import PageCoaching from './PageCoaching/PageCoaching'
import {  usePostData, useUpdatePost,useUserUpdate,useUser } from "../../Context/ContextProvider";
import useHomePage from './useHomePage'
import  useProfilUser from './PageProfil/ProfilUser/useProfilUser'
export default function HomePage() {
  const authValue = useContext(AuthContext)
  const updateUser =  useUserUpdate()
  const userData = useUser()
  const updatePost = useUpdatePost();
  const postData = usePostData()
  const {userEventData} = useHomePage()
  const setUserRequest = useProfilUser()

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      console.log("token dispach ok", token);
      if (token) {
         const res = await axios(`/api/load/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
         
         if(res){
           console.log('tutu')
            authValue.reducerDispatch({ type: "LOAD_USER", payload: res })
            updateUser(res.data)
         }
      }
      
    };
    fetchUser();
  },[]);
console.log('USERDAAAAAAATA',authValue.reducerState.user)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("/api/post");
      updatePost(res.data.post);
      console.log("POSTDATA", postData);
    };


    fetchData();
  }, []);


 
  return (
    <>


   

 <Header/> 
    <h1>Bienvenu {userData.userId} :')</h1>
  <h1>Vous avez {userEventData.length}</h1>
  {/* <button onClick={handleClick}>Click</button> */}
 <Switch>
  <Route path= {'/Home/Page/Profil'} component ={PageProfil} />       
    <Route path= {'/Home/Page/Training'} component ={PageTraining} />   
   <Route path= {'/Home/Page/Coaching'} component ={PageCoaching} />   
      </Switch>
         
   
   

    </>
  )
}
