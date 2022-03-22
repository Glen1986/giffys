import { useEffect, useRef } from "react"

export default function useTitle ({description, title}) {
  const prevTitle = useRef(document.title)
  const prevDescription = useRef(document.querySelector('meta[name=description]'))
  
  useEffect(() => {
    const previousTitle = prevTitle.current
    if(title){
    document.title = `${title} | Giffys`
      }
    return ()=> document.title = previousTitle
 }, [title])

  useEffect(()=>{
      const metaDescription = document.querySelector('meta[name=description]')
      const previousDescription = prevDescription.current

    if(description){
      metaDescription.setAtribute('content', description)
}
return ()=> metaDescription.setAtribute('conten', previousDescription)
}, [description])

  document.title = title
}
