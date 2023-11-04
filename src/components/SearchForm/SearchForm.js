import React, { useState } from 'react'
import Container from '../Container/Container'

const SearchForm = () => {

  const [searchInput, setSearchInput] = useState('')

  const searchFormHandler = (event) => {
    event.preventDefault()
  }

  const searchItem = (
    <form action='/search-page' onSubmit={searchFormHandler}>
      <label htmlFor='search-input'></label>
      <input
      name='search-input'
      type='text'
      id='search-input'
      value={searchInput}
      onChange={(event) => setSearchInput(event.target.value)}
      />

    <button type='submit'>Search</button>
    </form>
  )
  console.log(searchInput)

  return (
    <Container>
      {searchItem}
    </Container>
  )
}

export default SearchForm