import React, { useContext, useState } from "react"
//Creation des Contexts
const PostContext = React.createContext()
const PostUpdateContext = React.createContext()
const EventUserContext = React.createContext()
const EventUserUpdateContext = React.createContext()
const CategoryContext = React.createContext()
const CategoryUpdateContext = React.createContext()
const SearchContext = React.createContext()
const SearchUpdateContext = React.createContext()

//Creaction des Hooks pour acceder au Value des Contexts
export function usePostData() {
  return useContext(PostContext)
}

export function useUpdatePost() {
  return useContext(PostUpdateContext)
}

export function useCategory() {
  return useContext(CategoryContext)
}
export function useCategoryUpdate() {
  return useContext(CategoryUpdateContext)
}
export function useSearch() {
  return useContext(SearchContext)
}
export function useSearchUpdate() {
  return useContext(SearchUpdateContext)
}
export function useEventsPostUser() {
  return useContext(EventUserContext)
}

export function useUpdateEventsPostUser() {
  return useContext(EventUserUpdateContext)
}
// definition des Contexts
export function ContextProvider({ children }) {
  const [postData, setPostData] = useState([])
  const [categoryData, setCategoryData] = useState({})
  const [searchData, setSearchData] = useState([])
  const [eventsPostUser, setEventsPostUser] = useState([])
  function updatePost(data) {
    setPostData([...data])
  }
  function updateCategory(data) {
    setCategoryData({ ...data })
  }
  function updateSearch(data) {
    setSearchData([...data])
  }

  function updateEventsPostUser(data) {
    setEventsPostUser({ event: data })
  }
  //Propagation des Contexts
  return (
    <PostContext.Provider value={postData}>
      <PostUpdateContext.Provider value={updatePost}>
        <CategoryContext.Provider value={categoryData}>
          <CategoryUpdateContext.Provider value={updateCategory}>
            <EventUserContext.Provider value={eventsPostUser.event}>
              <EventUserUpdateContext.Provider value={updateEventsPostUser}>
                <SearchContext.Provider value={searchData}>
                  <SearchUpdateContext.Provider value={updateSearch}>
                    {children}
                  </SearchUpdateContext.Provider>
                </SearchContext.Provider>
              </EventUserUpdateContext.Provider>
            </EventUserContext.Provider>
          </CategoryUpdateContext.Provider>
        </CategoryContext.Provider>
      </PostUpdateContext.Provider>
    </PostContext.Provider>
  )
}
