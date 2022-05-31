import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Product Applications Executive</title>
        <meta property="og:title" content="Product Applications Executive" />
      </Helmet>
    </div>
  )
}

export default Home
