import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import { API_URL } from '../../config'


const CreateUserPage = () => {

    const[name,setName] = useState('')
    const[username,setUsername] = useState('')
    const[email,setEmail] = useState('')
    const[phone,setPhone] = useState('')
    const[website,setWebsite] = useState('')
    const[image,setImage] = useState('')
    const[companyName, setCompanyName] = useState('')
    const[catchPhrase, setCatchPhrase] = useState('')
    const[bs, setBs] = useState('')
    const[street, setStreet] = useState('')
    const[suite, setSuite] = useState('')
    const[city, setCity] = useState('')
    const[zipcode, setZipcode] = useState('')
    const[lng, setLng] = useState('')
    const[lat, setLat] = useState('')
    const[users, setUsers] = useState([])

    useEffect(() => {
        fetch(`${API_URL}/users`)
        .then(res => res.json())
        .then(usersData => {
          setUsers(usersData)
          console.log(usersData)
        })
      }, [])
  
  
    const nameHandler = event => setName(event.target.value)
    const usernameHandler = event => setUsername(event.target.value)
    const emailHandler = event => setEmail(event.target.value)
    const phoneHandler = event => setPhone(event.target.value)
    const imageHandler = event => setImage(event.target.value)
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
  
    const newUserHandler = event => {
      event.preventDefault()
  
      const newUser = {
        name: name,
        username: username,
        email: email,
        picture: image,
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

      console.log(newUser)

      fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(newUser)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  
    }
    
    return (
      <Container>
        <h1>Create New User</h1>
        
        <form onSubmit={newUserHandler}>
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
            <label htmlFor='image'>Photo: </label>
            <input
            type='url'
            name='image'
            id='email'
            value={image}
            onChange={imageHandler}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='phone'>Phone: </label>
            <input
            type='number'
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
            type='number'
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

          <button type='submit'>Create</button>
        </form>
  
      </Container>
    )
  }

export default CreateUserPage