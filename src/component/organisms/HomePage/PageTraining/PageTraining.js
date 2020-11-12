import React, { useEffect, useState } from "react"
import { Route, Switch, Link } from "react-router-dom"
import TrainingByDate from "./TrainingFilters/date/TrainingByDate"
import TrainingByRate from "./TrainingFilters/rate/TrainingByRate"
import TrainingByCategories from "./TrainingFilters/categories/TrainingByCategories"
import TrainingSearch from "./TrainingFilters/search/TrainingSearch"
import usePageTraining from "./usePageTraining"
import { usePostData } from "../../../Context/ContextProvider"
import Post from "../atoms/Post/Post"
import ProfilMyEvent from "../PageProfil/molecules/ProfilEvent/ProfilMyEvent"
import SearchBar from "../atoms/ShearchBar/SearchBar"
import axios from "axios"

export default function PageTraining() {
  const [postsEvents, setPostsEvents] = useState([])

  const [usersTrainingValidate, setUsersTrainingValidate] = useState([])
  const postData = usePostData()

  //Recuperer les post Valider
  const { select, handleChange, categories } = usePageTraining()
  useEffect(() => {
    if (postData.length > 0) {
      const filterPostEvent = async () => {
        //recupere tout les events des posts
        const getPostEvents = await postData.map((post) => post["Events"])
        setPostsEvents([getPostEvents])

        if (postsEvents.length > 0) {
          //recupere tout les events valider
          const getValidation = await postsEvents.map((events) =>
            events.map((event) =>
              event.filter((eventData) => eventData["eventValidation"] === true)
            )
          )

          setUsersTrainingValidate(getValidation[0])
          console.log(usersTrainingValidate, "userTrainingValidate")
        }
      }
      filterPostEvent()
    }
  }, [postData, postsEvents.length, usersTrainingValidate.length])

  return (
    <>
      <SearchBar />
      <div className="pageTraining">
        <div className="pageTraining-nav">
          <ul>
            <li>
              <Link to="/Home/Page/Training/Date">Date</Link>
            </li>
            <li>
              <Link to={`/Home/Page/Training/Categorie/${select}`}>
                <select onChange={handleChange}>
                  <option></option>
                  {categories.map((data) => (
                    <option value={data.categoryName}>
                      {data.categoryName}
                    </option>
                  ))}
                </select>
              </Link>
            </li>
            <li>
              <Link to="/Home/Page/Training/Rate">Pertinance</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="pageTraining postList">
            <Switch>
              <Route path="/Home/Page/Training/Date">
                <Post
                  postDefaultData={postData}
                  eventsValidate={usersTrainingValidate}
                />
              </Route>
              <Route path={`/Home/Page/Training/Categorie/:name`}>
                <TrainingByCategories categories={categories} />
              </Route>
              <Route
                path="/Home/Page/Training/Rate"
                component={TrainingByRate}
              />

              <Route path="/Home/Page/Training/search/:slug">
                <TrainingSearch eventsValidate={usersTrainingValidate} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}