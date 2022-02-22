import React, {useEffect, useState, useRef} from 'react'
import getTrendigTerms from '../../services/getTrendingsTermsService'
import Category from '../Category'

 function TrendingSearches () {
	const [trends, setTrends] = useState([])
	useEffect(() => {
    getTrendigTerms().then(setTrends)

}, [])
return <Category name='Tendencias' options = {trends}/>
}


export default function LazyTrending () {
	const [show, setShow] = useState(false)
  const elementRef = useRef()

	useEffect(()=>{
	const onChange = (entries, observer) =>{
		const el = entries[0]
		console.log(el.isIntersecting)
		if(el.isIntersecting){
		setShow(true)
		observer.disconnect()
		}
	}

	const observer = new IntersectionObserver(onChange, {
	rootMrgin: '100px'
		})
		observer.observe(elementRef.current)
	})
	return <div ref = {elementRef}>{show ? <TrendingSearches /> : null}</div>
}
