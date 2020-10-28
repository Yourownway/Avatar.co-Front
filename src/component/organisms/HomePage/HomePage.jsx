import React,{useEffect,useContext,useState} from 'react'
import {Route , Switch} from 'react-router-dom'
import Header from './molecules/Header'
import axios from 'axios'
import {AuthContext} from '../../../App'



import PageProfil from './PageProfil/PageProfil'
import PageTraining from './PageTraining/PageTraining'
import PageCoaching from './PageCoaching/PageCoaching'
import {  usePostData, useUpdatePost,useUserUpdate,useEventsPostUser,useUpdateEventsPostUser } from "../../Context/ContextProvider";

import  useProfilUser from './PageProfil/ProfilUser/useProfilUser'

export default function HomePage() {
  const authValue = useContext(AuthContext)
 
  const updatePost = useUpdatePost();
  const postData = usePostData()


  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
    
      if (token) {
         const res = await axios(`/api/load/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
         
         if(res){
 
            authValue.reducerDispatch({ type: "LOAD_USER", payload: res })
         
         }
      }
      
    };
    fetchUser();
  },[]);


  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("/api/post/allpost");
      updatePost(res.data.post);

    };


    fetchData();
  }, []);

 
  
  return (
    <>


   

 <Header/> 
    <h1>Bienvenu {authValue.reducerState.user.firstName} :')</h1>

  {/* <button onClick={handleClick}>Click</button> */}
 <Switch>
  <Route path= {'/Home/Page/Profil'}><PageProfil/></Route>       
    <Route path= {'/Home/Page/Training'} component={PageTraining}  />   
   <Route path= {'/Home/Page/Coaching'}  />   
      </Switch>
         
   
   

    </>
  )
}
