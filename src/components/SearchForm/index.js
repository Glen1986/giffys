import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useLocation } from 'wouter'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import './styles.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({ initialKeyword, initialRating }) {
    const [keyword, setKeyword] = useState(initialKeyword)
    const [, pushLocation] = useLocation()
    const [rating, setRating] = useState(initialRating)
    const handleSubmit = (evt) => {
        evt.preventDefault()
        //   onSubmit({keyword})
        pushLocation(`/search/${keyword}/${rating}?`)
    }

    const handleChange = (evt) => {
        setKeyword(evt.target.value)
    }
    const handleRating = (evt) => {
        setRating(evt.target.value)
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
                    onChange={handleRating}
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
            </form>
        </>
    )
}
export default React.memo(SearchForm)
