import React from 'react'
import Container from '../Container/Container'
import './PageHeader.css'
import { NavLink } from 'react-router-dom'
import logo from '../../full-kraken-logo.png'

const PageHeader = () => {
  return (
    <div className='page-header'>
        <Container>
        <nav className='main-navigation'>
            <NavLink to='/'>
                <div className='image-wrapper'>
                    <img className='logo' alt='/' src={logo}></img>
                </div>
            </NavLink>
            <ul className='nav-list'>

                <li className='nav-item'>
                    <NavLink to='/users'>Users</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/cryptocurrencies'>Cryptocurrencies</NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to='/posts'>Traders Forum</NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to='/albums'>NFT's</NavLink>
                </li>

            </ul>
        </nav>
        </Container>
    </div>
  )
}

export default PageHeader