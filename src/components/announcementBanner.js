import React from 'react'
import { Container, Navbar, NavbarBrand } from 'reactstrap'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'

export default class AnnouncementBanner extends React.Component {
  render() {
    return (
      <Container fluid style={{ backgroundColor: '#c5eff7' }}>
        <Navbar
          light
          style={{
            height: '40px',
            // marginRight: '25vw',
            // marginLeft: '25vw',
            // fontSize: 'auto',
            // marginLeft: 'auto',
            alignVertical: 'center',
            wordWrap: 'break-word',
          }}
        >
          <NavbarBrand style={{ alignItems: 'center', fontSize: '1em' }}>
            <strong>Find us at D4PC Nuts & Bolts!! Nov. 14-16</strong>
          </NavbarBrand>
        </Navbar>
      </Container>
    )
  }
}
