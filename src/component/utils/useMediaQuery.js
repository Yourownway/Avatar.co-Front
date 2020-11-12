import { useEffect, useState } from "react"

function useMediaQuery(query) {
  const [matche, setMatche] = useState("")

  useEffect(() => {
    const media = window.matchMedia(query)
    console.log(media)
    if (media.matches) setMatche(media.matches)

    const listener = () => setMatche(media.matches)

    media.addEventListener("change", listener)

    return () => media.removeEventListener("change", listener)
  }, [query, matche])

  return matche
}

export default useMediaQuery
