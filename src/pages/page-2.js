import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  </div>
)

export default SecondPage
