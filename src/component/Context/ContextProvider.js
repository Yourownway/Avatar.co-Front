import React, { useContext, useState } from "react";
//Creation des Contexts
const PostContext = React.createContext();
const PostUpdateContext = React.createContext();
const UserContext = React.createContext();
const UserUpdateContext = React.createContext();
const SearchContext = React.createContext();
const SearchUpdateContext = React.createContext();

//Creaction des Hooks pour acceder au Value des Contexts
export function usePostData() {
  return useContext(PostContext);
}

export function useUpdatePost() {
  return useContext(PostUpdateContext);
}

export function useUser() {
  return useContext(UserContext);
}
export function useUserUpdate() {
  return useContext(UserUpdateContext);
}
export function useSearch() {
  return useContext(SearchContext);
}
export function useSearchUpdate() {
  return useContext(SearchUpdateContext);
}

// definition des Contexts
export function ContextProvider({ children }) {
  const [postData, setPostData] = useState([]);
  const [userData, setUserData] = useState({});
  const [searchData, setSearchData] = useState([]);

  function updatePost(data) {
    setPostData([...data]);
  }
  function updateUser(data) {
    setUserData({ ...data });
  }
  function updateSearch() {
    setSearchData(() => {});
  }

  //Propagation des Contexts
  return (
    <PostContext.Provider value={postData}>
      <PostUpdateContext.Provider value={updatePost}>
        <UserContext.Provider value={userData}>
          <UserUpdateContext.Provider value={updateUser}>
            <SearchContext.Provider value={searchData}>
              <SearchUpdateContext.Provider value={updateSearch}>
                {children}
              </SearchUpdateContext.Provider>
            </SearchContext.Provider>
          </UserUpdateContext.Provider>
        </UserContext.Provider>
      </PostUpdateContext.Provider>
    </PostContext.Provider>
  );
}
