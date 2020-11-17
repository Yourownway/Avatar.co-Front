import React, { useEffect, useContext, useState } from "react"
import { Route, Switch } from "react-router-dom"
import Header from "./Header/Header"
import axios from "axios"
import { AuthContext } from "../../../App"

import PageProfil from "./PageProfil/PageProfil"
import PageTraining from "./PageTraining/PageTraining"

import { usePostData, useUpdatePost } from "../../Context/ContextProvider"

export default function HomePage() {
  const authValue = useContext(AuthContext)

  const updatePost = useUpdatePost()
  const postData = usePostData()

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token")

      if (token) {
        const res = await axios(`/api/load/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (res) {
          authValue.reducerDispatch({ type: "LOAD_USER", payload: res })
        }
      }
    }
    fetchUser()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("/api/post/allpost")
      updatePost(res.data.post)
    }

    fetchData()
  }, [])

  return (
    <>
      <Header />

      <Switch>
        <Route path={"/Home/Page/Profil"}>
          <PageProfil />
        </Route>
        <Route path={"/Home/Page/Training"} component={PageTraining} />
        <Route path={"/Home/Page/Coaching"} />
      </Switch>
    </>
  )
}
