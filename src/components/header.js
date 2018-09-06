import React from 'react'
import Link from 'gatsby-link'
import './header.css';

const Header = ({}) => (
  <div className="header">
    <div className="headerGroup">
      <Link to="/"><button>Ulaqab</button></Link>
      <Link to="/courses"><button>Courses</button></Link>
      <Link to="/download"><button>Download</button></Link>
      <Link to="/workshop"><button>Workshop</button></Link>
      <Link to="/buy"><button>Buy</button></Link>
    </div>
  </div>
)

export default Header
