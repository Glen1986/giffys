import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders without crashing', () => {
    const { getByText } = render(<App />)
    const title = getByText(/Gifs mas populares/i)
    expect(title).toBeInTheDocument()
})

test('searech from could be used', async () => {
    render(<App />)
    const input = await screen.findByRole('textbox')
    expect(input).toBeInTheDocument()
})
