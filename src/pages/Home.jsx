// This is the Home component. It is used to display the banner and the posts.

// This is the initial code for the Home component. It is used to display the banner carrousel and the information about the college.
import React from 'react'
import Banner from '../components/Banner/Banner'
import { user, useAuth0 } from '@auth0/auth0-react'
import { Profile,  } from './Profile'
import Info from '../components/Info/Info'


// This is the Home component. It is used to display the banner and the Info in the homepage.
const Home = () => {

  return (
    <div>
      <Banner />
      <Info/>
      
    </div>
  )
}

export default Home;