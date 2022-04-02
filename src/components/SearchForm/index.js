import React, { useReducer } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useLocation } from 'wouter'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import './styles.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']
const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword',
    UPDATE_RATING: 'update_rating',
}

const reducer = (state, action) => {
    if (action.type === ACTIONS.UPDATE_KEYWORD) {
        return {
            ...state,
            keyword: action.payload,
            times: state.times + 1,
        }
    } else if (action.type === ACTIONS.UPDATE_RATING) {
        return {
            ...state,
            rating: action.payload,
        }
    }
    return state
}

function SearchForm({ initialKeyword = '', initialRating = 'g' }) {
    const [, pushLocation] = useLocation()

    const [state, dispatch] = useReducer(reducer, {
        keyword: decodeURIComponent(initialKeyword),
        rating: initialRating,
        times: 0,
    })
    const { keyword, times, rating } = state

    const handleChange = (evt) => {
        dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: evt.target.value })
        setTimes(times + 1)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        //   onSubmit({keyword})
        pushLocation(`/search/${keyword}/${rating}?`)
    }

    const handleChangeRating = (evt) => {
        dispatch({ type: ACTIONS.UPDATE_RATING, payload: evt.target.value })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Button
                    style={{
                        borderRadius: '5px 0 0 5px ',
                        paddingBottom: '9px',
                    }}
                    variant="contained"
                    onSubmit={handleSubmit}
                    type="submit"
                >
                    Search
                </Button>
                <TextField
                    style={{
                        backgroundColor: 'white',
                        borderStyle: 'none',
                    }}
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue="Small"
                    variant="filled"
                    size="small"
                    type="text"
                    value={keyword}
                    onChange={handleChange}
                    placeholder="buscar Gifs"
                />
                <Select
                    onChange={handleChangeRating}
                    value={rating}
                    style={{
                        height: '2.5rem',
                        backgroundColor: 'grey',
                        borderRadius: '0 5px 5px 0',
                    }}
                >
                    {RATINGS.map((rating) => (
                        <MenuItem value={rating} key={rating}>
                            {rating}
                        </MenuItem>
                    ))}
                </Select>
                <small>{times}</small>
            </form>
        </>
    )
}
export default React.memo(SearchForm)
