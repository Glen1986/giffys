import  {useState, useEffect, useRef} from "react";

export default function useNearScreen ({distance = '300px', externalRef, once = true} = {}){
const [isNearScreen, setShow] = useState(false)
const fromRef = useRef()

useEffect(()=>{
let observer
const element = externalRef ? externalRef.current : fromRef.current
if(!element) return
const onChange =(entries, observer) =>{
	const el = entries[0]
//console.log(el.isIntersecting)
	if(el.isIntersecting){
		setShow(true)
  once &&	observer.disconnect()
	} else {
	!once && setShow(false)
	}
}

 Promise.resolve(
	typeof IntersectionObserver !== 'undefined'
	? IntersectionObserver
	: import('intersection-observer')
	).then(()=>{
			observer = new IntersectionObserver(onChange,{
		rootMargin: distance
		})
		observer.observe(element)
	})
return ()=> observer && observer.disconnect()
	}, [distance, externalRef, once])
return {isNearScreen, fromRef}
}
