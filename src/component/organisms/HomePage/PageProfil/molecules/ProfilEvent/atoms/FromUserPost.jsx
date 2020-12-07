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

    return (
        <>
        <h2>Le nom de l'event..</h2>
      <input
        onChange={handleChange}
        type="text"
        name="postName"
        placeholder="postName"
        value={userPostData.postName}
      />
      <h2>Quand ..?</h2>
      <input className="profilUser-newPost-where"
        onChange={handleChange}
        type="date"
        name="postDate"
        placeholder="postDate"
        value={userPostData.postDate}
      />
  <h2>Quel genre ..?</h2>
     <select name='categoryId' onChange={handleChange}>
                   <option></option>
                  {categories.map((data) => (
                    <option value={data.id}>
                      {data.categoryName}
                    </option>
                  ))}
                </select>
      <h2>Ou ca ..? </h2>
             <select name='parcId' onChange={handleChange}>
                   <option></option>
                  {parcs.map((data) => (
                    <option value={data.id}>
                      {data.parcName}
                    </option>
                  ))}
                </select>
     
 
      <h2>Combien de personne ..?</h2>
      <input
        onChange={handleChange}
        type="text"
        name="postMaxGuest"
        placeholder="postMaxGuest"
        value={userPostData.postMaxGuest}
      />
       <h2>Dis nous en plus ..!</h2>
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