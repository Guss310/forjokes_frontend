import React from 'react'
import Banner from '../components/Banner/Banner'
import { user, useAuth0 } from '@auth0/auth0-react'
import { Profile,  } from './Profile'

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      <Banner />
      {/* {isAuthenticated && <img src={user.picture} alt={user.name} />} */}
      
      
    </div>
  )
}

export default Home;