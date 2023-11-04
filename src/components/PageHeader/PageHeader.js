import React from 'react'
import Container from '../Container/Container'
import './PageHeader.css'
import { NavLink } from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm'

const PageHeader = () => {
  return (
    <div className='page-header'>
        <Container>
        <nav className='main-navigation'>
            <ul className='nav-list'>
            <li className='nav-item'>
                <NavLink to='/'>Home</NavLink>
            </li>

            <li className='nav-item'>
                <NavLink to='/users'>Users Page</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/cryptocurrencies'>Cryptocurrencies</NavLink>
            </li>

            <li className='nav-item'>
                <NavLink to='/posts'>Traders Forum</NavLink>
            </li>

            <li className='nav-item'>
                <NavLink to='/albums'>NFT collections</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/'><SearchForm/></NavLink>
            </li>
            </ul>
        </nav>
        </Container>
    </div>
  )
}

export default PageHeader