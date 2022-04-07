import React, { useReducer } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useLocation } from 'wouter'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import useForm from './hooks'
import './styles.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({ initialKeyword = '', initialRating = 'g' }) {
    const { keyword, rating, times, updateKeyword, updateRating } = useForm({
        initialKeyword,
        initialRating,
    })

    const [, pushLocation] = useLocation()

    const handleChange = (evt) => {
        updateKeyword(evt.target.value)
        setTimes(times + 1)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}/${rating}?`)
    }

    const handleChangeRating = (evt) => {
        updateRating(evt.target.value)
    }
    return (
        <>
            <form
                onSubmit={handleSubmit}
                style={{
                    height: '2.5rem',
                    margin: '4rem',
                    position: 'relative',
                }}
            >
                <Button
                    style={{
                        borderRadius: '5px 0 0 5px ',
                        paddingBottom: '7px',
                        height: '100%',
                        bottom: '16px',
                        paddingTop: '8px',
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
                <small
                    style={{
                        fontSize: '2rem',
                        position: 'relative',
                        bottom: '10px',
                    }}
                >
                    {times}
                </small>
            </form>
        </>
    )
}
export default React.memo(SearchForm)
