import React,{useEffect} from 'react'
import {Route , Switch} from 'react-router-dom'
import Header from './molecules/Header'
import axios from 'axios'



import PageProfil from './PageProfil/PageProfil'
import PageTraining from './PageTraining/PageTraining'
import PageCoaching from './PageCoaching/PageCoaching'
import {  usePostData, useUpdatePost } from "../../Context/ContextProvider";

export default function HomePage() {
  
  const updatePost = useUpdatePost();
  const postData = usePostData()

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
  
 <Switch>
  <Route path= {'/Home/Page/Profil'} component ={PageProfil} />       
    <Route path= {'/Home/Page/Training'} component ={PageTraining} />   
   <Route path= {'/Home/Page/Coaching'} component ={PageCoaching} />   
      </Switch>
         
   
   

    </>
  )
}
