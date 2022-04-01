import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useLocation } from 'wouter'
import './styles.css'

function SearchForm() {
  
    const [keyword, setKeyword] = useState('')
    const [, pushLocation] = useLocation()


    const handleSubmit = (evt) => {
        evt.preventDefault()
        //   onSubmit({keyword})

        pushLocation(`/search/${keyword}`)
    }

    const handleChange = (evt) => {
        setKeyword(evt.target.value)
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
                        borderRadius: '0 5px 5px 0',

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
            </form>
        </>
    )
}
export default React.memo(SearchForm)
