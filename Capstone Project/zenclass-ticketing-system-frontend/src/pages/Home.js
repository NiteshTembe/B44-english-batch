import React from 'react'
import useAuth from '../hooks/useAuth'

const Home = () => {
    const [auth] = useAuth();
  return (
    <div>
      <h2> Welcome to</h2>Home Page {auth.user_name}
    </div>
  )
}

export default Home
