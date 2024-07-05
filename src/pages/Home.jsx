import React from 'react'
import Poems from '../component/Poems'
import Greet from '../component/Greet'
import Footer from '../component/Footer'


const Home = () => {
  return (
    <>
      <Greet />
      <Poems />
      <Poems />
      <Footer />
    </>
  )
}

export default Home
