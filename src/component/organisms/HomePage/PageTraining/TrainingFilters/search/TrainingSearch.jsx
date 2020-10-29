import React from 'react'
import {useParams} from "react-router-dom";


import { useSearch } from "../../../../../Context/ContextProvider";
import Post from '../../../atoms/Post/Post';
export default function TrainingSearch({eventsValidate}) {
    const searchData=useSearch()

    let {slug} = useParams()

    return (
   <div>
       
       {searchData.map(data=> <h1>{data.postName}</h1>)}
             {searchData.length !== 0 ? (
        
              
     <Post postDefaultData={searchData} eventsValidate={eventsValidate} />
             ) : <h1>Aucun resultat pour "{slug}"</h1>}
    </div>
    )
}
