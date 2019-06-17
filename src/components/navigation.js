import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import '../css/fontStyle.css'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const brand = this.props.data.edges[0].node.brandLogo
    const links = this.props.data.edges[0].node.links

    return (
      <Container fluid>
        <Container>
          <Navbar sticky="top" light expand="lg">
            <NavbarBrand href="/">
              <Img fixed={brand.fixed} alt="Akute Health" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem key="home">
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                {/* <NavItem key="signup">
                <NavLink href="https://signup.akutehealth.com">Signup</NavLink>
              </NavItem> */}
                {links.map(link => {
                  return (
                    <NavItem key={link}>
                      <NavLink
                        href={`/${link.replace(/\s+/g, '-').toLowerCase()}`}
                      >
                        {link}
                      </NavLink>
                    </NavItem>
                  )
                })}
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </Container>
    )
  }
}

Navigation.propTypes = {
  data: PropTypes.object.isRequired,
}
