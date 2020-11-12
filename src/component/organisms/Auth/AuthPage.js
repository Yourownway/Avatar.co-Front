import React from 'react'
import SignIn from './signIn/SignIn'
import SignUp from './signUp/SignUp'
import Aside from '../../atoms/Aside'
import useAuthPage from './useAuthPage'

export default function AuthPage() {
    const {display, handleClick} = useAuthPage()
    return (

    
            <>
      <div className="home">
        <div className="asides">
          <Aside
            asideClass="home-aside"
            src="http://via.placeholder.com/200x300"
            alt=""
            title="Sportif"
            history="/sportif"
            description="Dolor pariatur in anim minim mollit culpa enim dolore occaecat. Officia qui id eu velit deserunt consequat amet. Elit ea dolore duis nisi eu eiusmod ut. Dolore minim eu reprehenderit consectetur reprehenderit anim. Quis elit amet est veniam deserunt dolore labore id consectetur in. Cillum ipsum mollit cillum dolore irure eiusmod
"
          />
          <Aside
            asideClass="home-aside"
            src="http://via.placeholder.com/200x300"
            alt=""
            title="Coach"
            history="/sportif"
            description="Dolor pariatur in anim minim mollit culpa enim dolore occaecat. Officia qui id eu velit deserunt consequat amet. Elit ea dolore duis nisi eu eiusmod ut. Dolore minim eu reprehenderit consectetur reprehenderit anim. Quis elit amet est veniam deserunt dolore labore id consectetur in. Cillum ipsum mollit cillum dolore irure eiusmod.
"
          />
        </div>
        {display ? 
        <SignIn />:
        <SignUp display={display} />}
   <button onClick={handleClick}>{display ? "SignUp" : "SignIn"}</button>
      </div>
    </>
      


    )
}
