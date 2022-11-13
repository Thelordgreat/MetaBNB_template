import React from 'react'
import Discover from '../Components/Discover';
import Hero from '../Components/Hero';
import NFTs from '../Components/NFTs';
import Platforms from '../Components/Platforms';

const Home = () => {
  return (
    <>
      <Hero />
      <Platforms/>
      <NFTs/>
      <Discover/>
    </>
  )
}

export default Home