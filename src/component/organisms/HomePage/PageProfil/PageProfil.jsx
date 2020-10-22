import React  from 'react'
import {Route , Switch,} from 'react-router-dom'


import ProfilNav from './atoms/ProfilNav'
import ProfilHistory from './ProfilHistory/ProfilHistory'
import ProfilNewPost from './ProfilNewPost/ProfilNewPost'
import ProfilUser from './ProfilUser/ProfilUser'

import usePageProfil from './usePageProfil'
export default function PageProfil() {

    const {userPost} = usePageProfil()
     
    return (
 
               <div className="profilPageUser-Container">

      <ProfilNav />
      <Switch>
         <Route path="/Home/Page/Profil/History" exact>
          <ProfilHistory userPost={userPost} />
        </Route>  

        <Route
          path="/Home/Page/Profil/Post"
          exact
          component={ProfilNewPost}
        />
      </Switch>
      <ProfilUser />
    </div>
   
    )
}
