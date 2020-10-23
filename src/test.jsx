import React, { useContext, useEffect } from 'react'
import {AuthContext} from './App2'
export default function Test() {
    const test = useContext(AuthContext)
    useEffect(()=>{
      const  tutu=()=>{
              test.reducerDispatch({type:'YES'})
        }
      tutu()
    },[])
    return (
        <div>
              <button onClick={()=>test.reducerDispatch({ type: "SIGNIN" })}>LOGIN</button>
        <button onClick={()=>test.reducerDispatch({ type: "LOGOUT" })}>LOGOUT</button> 
        </div>
    )
}
