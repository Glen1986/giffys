import React, {useEffect, useState} from 'react'
import getTrendigTerms from 'services/getTrendingsTermsService'
import Category from 'components/Category'

export default function TrendingSearches () {
  const [trends, setTrends] = useState([])

	useEffect(() => {
    getTrendigTerms().then(setTrends)
}, [])
	return <Category name='Tendencias' options = {trends}/>
}

