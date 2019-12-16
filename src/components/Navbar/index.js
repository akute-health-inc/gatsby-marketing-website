import React from 'react'
import NavbarContainer from './../NavbarContainer'
import { Link } from 'gatsby'
import SectionButton from './../SectionButton'
import './styles.scss'
import Img from 'gatsby-image'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }

    this.setMenuOpen = this.setMenuOpen.bind(this)
  }

  setMenuOpen = menu => {
    this.setState({
      menuOpen: menu,
    })
  }

  render() {
    const brand = this.props.data.edges[0].node.brandLogo
    const links = this.props.data.edges[0].node.links

    return (
      <NavbarContainer spaced={this.props.spaced} color={this.props.color}>
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <Link to="/">
                <Img className="image" fixed={brand.fixed} alt="Akute Health" />
              </Link>
            </div>
            <div
              className={
                'navbar-burger burger' +
                (this.state.menuOpen ? ' is-active' : '')
              }
              onClick={() => this.setMenuOpen(!this.state.menuOpen)}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            className={
              'navbar-menu' + (this.state.menuOpen ? ' is-active' : '')
            }
          >
            <div className="navbar-end">
              {/* <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/pricing">
                Pricing
              </Link>
              <Link className="navbar-item" to="/how-it-works">
                How It Works
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link
                className="navbar-item"
                to="https://app.akutehealth.com/#/login"
              >
                Sign in
              </Link> */}
              {links.map(link => {
                return (
                  <Link
                    className="navbar-item"
                    to={`/${link.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    {link}
                  </Link>
                )
              })}
              <div className="navbar-item">
                <SectionButton
                  parentColor={this.props.color}
                  size="normal"
                  // onClick={() => {
                  //   router.push('https://app.akutehealth.com/#/signup')
                  // }}
                >
                  Sign Up
                </SectionButton>
              </div>
            </div>
          </div>
        </div>
      </NavbarContainer>
    )
  }
}

export default Navbar
