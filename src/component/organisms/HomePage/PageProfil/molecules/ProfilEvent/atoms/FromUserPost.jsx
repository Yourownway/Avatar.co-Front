import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function FromUserPost({handleChange, userPostData}) {
  const [categories, setCategories] = useState([])
    const [parcs, setParcs] = useState([])
      useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/api/categories")
  
      setCategories(res.data.Categories)
    }
    fetchCategories()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

       useEffect(() => {
    const fetchParcs = async () => {
      const res = await axios.get("/api/parcs")
    
      setParcs(res.data)
    }
    fetchParcs()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
console.log(parcs,"ici")
    return (
        <>
        <h1>Le nom de l'event..</h1>
      <input
        onChange={handleChange}
        type="text"
        name="postName"
        placeholder="postName"
        value={userPostData.postName}
      />
      <h1>Quand ..?</h1>
      <input
        onChange={handleChange}
        type="date"
        name="postDate"
        placeholder="postDate"
        value={userPostData.postDate}
      />
  <h1>Quel genre ..?</h1>
     <select name='categoryId' onChange={handleChange}>
                
                  {categories.map((data) => (
                    <option value={data.id}>
                      {data.categoryName}
                    </option>
                  ))}
                </select>
      <h1>Ou ca ..? </h1>
             <select name='parcId' onChange={handleChange}>
                
                  {parcs.map((data) => (
                    <option value={data.id}>
                      {data.parcName}
                    </option>
                  ))}
                </select>
     
 
      <h1>Combien de personne ..?</h1>
      <input
        onChange={handleChange}
        type="text"
        name="postMaxGuest"
        placeholder="postMaxGuest"
        value={userPostData.postMaxGuest}
      />
       <h1>Dis nous en plus ..!</h1>
      <textarea
        onChange={handleChange}
        type="text"
        name="postDescription"
        placeholder="postDescription"
        value={userPostData.postDescription}
      ></textarea>
    </>
    )
}