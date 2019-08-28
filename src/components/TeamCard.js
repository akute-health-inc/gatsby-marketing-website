import React from 'react'
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  CardBody,
  CardImg,
} from 'reactstrap'
import PropTypes from 'prop-types'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import 'bootstrap/dist/css/bootstrap.css'

export default class TeamCard extends React.Component {
  render() {
    const person = this.props.data
    const index = this.props.index

    return (
      // <div className="col-md-6 col-lg-4 col-sm-12 col-xs-12 col-md-offset-6" style={{margin: "0 auto"}}>
      //   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"></link>
      //   <Card>
      //     <CardImg top width="100%" src={person.profilePics[index].fluid.src} alt={person.names[index]} />
      //     <CardBody>
      //       <CardTitle style={{fontWeight: "bold"}}>{person.names[index]}</CardTitle>
      //       <CardSubtitle style={{fontStyle: "oblique"}}>{person.titles[index]}</CardSubtitle>
      //       <CardText>{person.bios[index]}</CardText>
      //       <div className="row">
      //         <OutboundLink href={person.twitters[index]} className="fab fa-twitter" style={{margin: "auto 10px"}}>{}</OutboundLink>
      //         <OutboundLink href={person.linkedIns[index]} className="fab fa-linkedin-in" style={{margin: "auto 10px"}}>{}</OutboundLink>
      //         <OutboundLink href={`mailto:${person.emails[index]}`} className="fa fa-envelope" style={{margin: "auto 10px"}}>{}</OutboundLink>
      //       </div>
      //     </CardBody>
      //   </Card>
      // </div>
      <div
        className="column is-half-tablet is-one-third-desktop is-flex"
        key={index}
      >
        <div className="TeamBios__card card is-flex">
          <div className="TeamBios__card-content card-content is-flex has-text-centered">
            <div className="TeamBios__avatar-wrapper">
              <CardImg
                image={person.profilePics[index].fluid.src}
                size={128}
                alt={person.name}
              />
            </div>
            <div className="TeamBios__details">
              <p className="is-size-5">{person.name}</p>
              <p className="is-size-7 is-uppercase has-text-weight-semibold">
                {person.titles[index]}
              </p>
              <p className="TeamBios__bio">{person.bios[index]}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

TeamCard.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}
