import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../config'

const EditUserPage = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const[name,setName] = useState('')
    const[username,setUsername] = useState('')
    const[email,setEmail] = useState('')
    const[phone,setPhone] = useState('')
    const[website,setWebsite] = useState('')
    const[companyName, setCompanyName] = useState('')
    const[catchPhrase, setCatchPhrase] = useState('')
    const[bs, setBs] = useState('')
    const[street, setStreet] = useState('')
    const[suite, setSuite] = useState('')
    const[city, setCity] = useState('')
    const[zipcode, setZipcode] = useState('')
    const[lng, setLng] = useState('')
    const[lat, setLat] = useState('')

    useEffect(() => {
      const getUsers = async () => {
        const { data } = await axios(`${API_URL}/users/${id}`)

        console.log(data)

        setName(data.name)
        setUsername(data.username)
        setEmail(data.email)
        setPhone(data.phone)
        setWebsite(data.website)
        setCompanyName(data.company.name)
        setCatchPhrase(data.company.catchPhrase)
        setBs(data.company.bs)
        setStreet(data.address.street)
        setSuite(data.address.suite)
        setCity(data.address.city)
        setZipcode(data.address.zipcode)
        setLat(data.address.geo.lat)
        setLng(data.address.geo.lng)

      }
  
      getUsers()
    }, [id])
  
    const nameHandler = event => setName(event.target.value)
    const usernameHandler = event => setUsername(event.target.value)
    const emailHandler = event => setEmail(event.target.value)
    const phoneHandler = event => setPhone(event.target.value)
    const websiteHandler = event => setWebsite(event.target.value)
    const companyNameHandler = event => setCompanyName(event.target.value)
    const catchPhraseHandler = event => setCatchPhrase(event.target.value)
    const bsHandler = event => setBs(event.target.value)
    const streetHandler = event => setStreet(event.target.value)
    const suiteHandler = event => setSuite(event.target.value)
    const cityHandler = event => setCity(event.target.value)
    const zipcodeHandler = event => setZipcode(event.target.value)
    const lngHandler = event => setLng(event.target.value)
    const latHandler = event => setLat(event.target.value)
  
    const editUserHandler = event => {
      event.preventDefault()
  
      const editUser = {
        name: name,
        id: Number(id),
        username: username,
        email: email,
        address: {
          street: street,
          suite: suite,
          city: city,
          zipcode: zipcode,
          geo: {
            lat: lat,
            lng: lng,
          }
        },
        phone: phone,
        website: website,
        company: {
            companyName: companyName,
            catchPhrase: catchPhrase,
            bs: bs,
        }
      }

      console.log(editUser)

      fetch(`${API_URL}/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(editUser)
      })
      .then(res => res.json())
      .then(data => {
        navigate('/users/' + id)
        console.log(data)
      })
  
    }

  return (
    <Container>
        <h1>Edit User</h1>
        
        <form onSubmit={editUserHandler}>
        <h2>User info</h2>
        <div className='form-control'>
            <label htmlFor='name'>Name: </label>
            <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={nameHandler}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='username'>Username: </label>
            <input
            type='text'
            name='username'
            id='username'
            value={username}
            onChange={usernameHandler}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='email'>Email: </label>
            <input
            type='text'
            name='email'
            id='email'
            value={email}
            onChange={emailHandler}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='phone'>Phone: </label>
            <input
            type='text'
            name='phone'
            id='phone'
            value={phone}
            onChange={phoneHandler}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='website'>Website: </label>
            <input
            type='text'
            name='website'
            id='website'
            value={website}
            onChange={websiteHandler}
            />
          </div>

          <div className='form-control'>
            <h2>Company</h2>
            <label htmlFor='company-name'>Company name: </label>
            <input
            type='text'
            name='company-name'
            id='company-name'
            value={companyName}
            onChange={companyNameHandler}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='catch-phrase'>Catch phrase: </label>
            <input
            type='text'
            name='catch-phrase'
            id='catch-phrase'
            value={catchPhrase}
            onChange={catchPhraseHandler}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='bs'>Bs: </label>
            <input
            type='text'
            name='bs'
            id='bs'
            value={bs}
            onChange={bsHandler}
            />
          </div>

          <div className='form-control'>
            <h2>Address</h2>
            <label htmlFor='street'>Street: </label>
            <input
            type='text'
            name='street'
            id='street'
            value={street}
            onChange={streetHandler}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='suite'>Suite: </label>
            <input
            type='text'
            name='suite'
            id='suite'
            value={suite}
            onChange={suiteHandler}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='city'>City: </label>
            <input
            type='text'
            name='city'
            id='city'
            value={city}
            onChange={cityHandler}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='zipcode'>Zipcode: </label>
            <input
            type='text'
            name='zipcode'
            id='zipcode'
            value={zipcode}
            onChange={zipcodeHandler}
            />
          </div>

          <div className='form-control'>
            <h2>Geo</h2>
            <label htmlFor='lat'>Lat: </label>
            <input
            type='number'
            name='lat'
            id='lat'
            value={lat}
            onChange={latHandler}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='lng'>Lng: </label>
            <input
            type='number'
            name='lng'
            id='lng'
            value={lng}
            onChange={lngHandler}
            />
          </div>

          <button type='submit'>Edit</button>
        </form>

    </Container>
  )
}

export default EditUserPage