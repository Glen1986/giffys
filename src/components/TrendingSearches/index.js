import useNearScreen from 'hooks/useNearScreen'
import React, {Suspense} from 'react'
import Spiner from 'components/Spiner'

const TrendingSearches = React.lazy(
  ()=> import('./TrendingSearches')
)
export default function LazyTrending () {
	const {isNearScreen, fromRef} = useNearScreen({distance: '100px'})
// const [show, setShow] useState(false)
console.log(isNearScreen)

return <div ref={fromRef}>
				<Suspense fallback = {<Spiner/>}>
					{isNearScreen ? <TrendingSearches /> : <Spiner/>}
				</Suspense>
			</div>
}
