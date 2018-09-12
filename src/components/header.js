import React from 'react'
import Link from 'gatsby-link'
import './header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;
    if(scrollTop > 50 ){
      this.setState({hasScrolled: true});
    } else {
      this.setState({hasScrolled: false});
    }
  }
  render() {
    return (
      <div className={this.state.hasScrolled ? 'header headerScrolled' : 'header'}>
        <div className="headerGroup">
          <Link to="/">Ulaqab</Link>
          <Link to="/courses" className="button">Courses</Link>
          <Link to="/download" className="button">Download</Link>
          <Link to="/workshop" className="button">Workshop</Link>
          <Link to="/buy"><button>Buy</button></Link>
        </div>
      </div>
    );
  }
}