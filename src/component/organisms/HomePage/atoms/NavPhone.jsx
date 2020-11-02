import React, {useState} from 'react'
import User from '../Header/User'

export default function NavPhone() {
    const [open,setOpen] = useState(false)
    return (
        <div className='navPhone-container' onClick={()=>(setOpen(true))}>
           <div className='navPhone-burger'>
               
               
            <div className='navPhone-burger-1'></div>
            <div className='navPhone-burger-1'></div>
            <div className='navPhone-burger-1'></div>
 </div>
            <User />
        </div>
    )
}
