import React from 'react'
import {useParams} from "react-router-dom";


import { useSearch } from "../../../../../Context/ContextProvider";
import Post from '../../../atoms/Post/Post';
export default function TrainingSearch({events}) {
    const searchData=useSearch()
    let {slug} = useParams()
    console.log(searchData,'searchData')
    return (
   <div>
             {searchData.length !== 0 ? (
        
              
     <Post postDefaultData={searchData} events={events} />
             ) : <h1>Aucun resultat pour "{slug}"</h1>}
    </div>
    )
}
