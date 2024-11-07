import React from 'react'
import Banner from '../components/Banner/Banner'
import { user, useAuth0 } from '@auth0/auth0-react'
import { Profile,  } from './Profile'
// aplicar acá la logica del Profile (El register que se manda al back)

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      <Banner />
      
      
      
    </div>
  )
}

export default Home;