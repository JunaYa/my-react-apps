import React from 'react';
import Link from 'gatsby-link';
import Card from '../components/card';
import Section from '../components/section';
import Wave from '../components/wave';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hi people</h1>
        <p>Welcome to Ulaqab.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>
        <Wave/>
      </div>
      </div>
      <div className="cards">
          <h2>11 courses, more coming</h2>
          <div className="cardGroup">
            <Card
              title="React for designers"
              content="12 sections"
              image={require('../images/wallpaper.jpg')}
            />
            <Card
              title="React for designers"
              content="10 sections"
              image={require('../images/wallpaper2.jpg')}
            />
            <Card
              title="React for designers"
              content="11 sections"
              image={require('../images/wallpaper3.jpg')}
            />
            <Card
              title="React for designers"
              content="8 sections"
              image={require('../images/wallpaper4.jpg')}
            />
            <Card
              title="React for designers"
              content="9 sections"
              image={require('../images/wallpaper.jpg')}
            />
            <Card
              title="React for designers"
              content="10 sections"
              image={require('../images/wallpaper2.jpg')}
            />
          </div>
      </div>
      <Section
        image={require('../images/wallpaper2.jpg')}
        logo={require('../images/logo-react.png')}
        title="React Design Code"
        text="A consistent color palette is an 
        essential asset in the communication 
        resources of any design system. These are
         the colors that are used throughout 
         Design+Code's digital presence"
      />
  </div>
)

export default IndexPage
