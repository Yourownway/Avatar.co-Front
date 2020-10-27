import React, { useContext, useState } from "react"
//Creation des Contexts
const PostContext = React.createContext()
const PostUpdateContext = React.createContext()
const EventUserContext = React.createContext()
const EventUserUpdateContext = React.createContext()
const UserContext = React.createContext()
const UserUpdateContext = React.createContext()
const SearchContext = React.createContext()
const SearchUpdateContext = React.createContext()

//Creaction des Hooks pour acceder au Value des Contexts
export function usePostData() {
  return useContext(PostContext)
}

export function useUpdatePost() {
  return useContext(PostUpdateContext)
}

export function useUser() {
  return useContext(UserContext)
}
export function useUserUpdate() {
  return useContext(UserUpdateContext)
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
  const [userData, setUserData] = useState({})
  const [searchData, setSearchData] = useState([])
  const [eventsPostUser, setEventsPostUser] = useState([])
  function updatePost(data) {
    setPostData([...data])
  }
  function updateUser(data) {
    setUserData({ ...data })
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
        <UserContext.Provider value={userData}>
          <UserUpdateContext.Provider value={updateUser}>
            <EventUserContext.Provider value={eventsPostUser.event}>
              <EventUserUpdateContext.Provider value={updateEventsPostUser}>
                <SearchContext.Provider value={searchData}>
                  <SearchUpdateContext.Provider value={updateSearch}>
                    {children}
                  </SearchUpdateContext.Provider>
                </SearchContext.Provider>
              </EventUserUpdateContext.Provider>
            </EventUserContext.Provider>
          </UserUpdateContext.Provider>
        </UserContext.Provider>
      </PostUpdateContext.Provider>
    </PostContext.Provider>
  )
}
