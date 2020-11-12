import React, {useState} from 'react';
import User from '../Header/User';
import { Link } from "react-router-dom";

export default function NavPhone() {
    const [open,setOpen] = useState(false)
    return (
        <div className='navPhone' onClick={()=>(setOpen(!open))}>
           <div className='navPhone-burger'>
               
               
            <div className='navPhone-burger-1'></div>
            <div className='navPhone-burger-2'></div>
            <div className='navPhone-burger-3'></div>
         </div>     
            <User />
            {open?(<div className="navPhone-menu">
                  <ul className="navPhone-ul">
        <li className="navPhone-li">
           <Link
            activeClassName="navPhone-a-current"
            className="navPhone-a"
            to="/Home/Page/Profil/AllEvent"
            exact
          >ACTU</Link>
        </li>
                <li className="navPhone-li">
          <Link
            activeClassName="navPhone-a-current"
            className="navPhone-a"
            to="/Home/Page/Profil/AllEvent"
            exact
          >
            PROFIL
          </Link>
        </li>
        <li className="navPhone-li">
          <Link
            activeClassName="navbar-a-current"
            className="navbar-a"
            to="/Home/Page/Training" 
            exact
          >
            TRAINING
          </Link>
        </li>
         <li className="navPhone-li">
          {/* <Link
            activeClassName="navbar-a-current"
            className="navbar-a"
            to="/Home/Page/Coaching"
            exact
          >
            COACHING
          </Link> */}
        </li>
      </ul>

          

                </div>):null}
        </div>
    )
}
