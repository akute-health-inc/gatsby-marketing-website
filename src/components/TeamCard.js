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
      <div
        className="col-md-12 col-lg-12 col-sm-12 col-xs-12"
        style={{ margin: 'auto 0' }}
      >
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossorigin="anonymous"
        />
        <div className="row">
          <div className="col-md-4 col-lg-4 col-sm-8 col-xs-4 offset-sm-2 offset-md-1">
            <Card>
              <CardImg
                top
                className="rounded-circle"
                style={{ maxWidth: '75%' }}
                width="10%"
                src={person.profilePics[index].fluid.src}
                alt={person.names[index]}
              />
              <CardBody>
                <CardTitle style={{ fontWeight: 'bold' }}>
                  {person.names[index]}
                </CardTitle>
                <CardSubtitle
                  style={{ fontStyle: 'oblique', fontWeight: 'bold' }}
                >
                  {person.titles[index]}
                </CardSubtitle>
                <CardText>{person.bios[index]}</CardText>
                <div className="row">
                  <OutboundLink
                    href={person.twitters[index]}
                    className="fab fa-twitter"
                    style={{ margin: 'auto 10px' }}
                  >
                    {}
                  </OutboundLink>
                  <OutboundLink
                    href={person.linkedIns[index]}
                    className="fab fa-linkedin-in"
                    style={{ margin: 'auto 10px' }}
                  >
                    {}
                  </OutboundLink>
                  <OutboundLink
                    href={`mailto:${person.emails[index]}`}
                    className="fa fa-envelope"
                    style={{ margin: 'auto 10px' }}
                  >
                    {}
                  </OutboundLink>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-8 col-xs-4 offset-sm-2 offset-md-1">
            <Card>
              <CardImg
                top
                className="rounded-circle"
                style={{ maxWidth: '50%' }}
                width="10%"
                src={
                  'https://cdn.membershipworks.com/u/5bfb4a97f033bf2b52209c08_lgl.jpg?1543358867'
                }
                alt={'Dr. Jack Forbush, DO'}
              />
              <CardBody>
                <CardTitle style={{ fontWeight: 'bold' }}>
                  {'Dr. Jack Forbush, DO'}
                </CardTitle>
                <CardSubtitle
                  style={{ fontStyle: 'oblique', fontWeight: 'bold' }}
                >
                  {'Advisor'}
                </CardSubtitle>
                <CardText>{`Dr. Leigh "Jack" Forbush is the founder of the Osteopathic Center for Family Medicine and a founding member of the DPC Alliance.`}</CardText>

                <CardText>{`His particular areas of interest include Integrative and Holistic Medicine, applying the principles of Osteopathy across the age spectrum and the incorporation of information technology in medicine.`}</CardText>

                <CardText>{`Each year, he travels to Paraguay offering his services to the Andrea Ritz Foundation caring for (and enjoying the company of) Guarani of all ages.`}</CardText>

                {/* <CardText>{`He is actively involved at the local, state and federal level in his capacity as the Maine Osteopathic Association's current President.`}</CardText>

                <CardText>{`He holds active board certifications in Family Medicine, Neuromuscular Medicine/Osteopathic Manipulative Medicine and Integrative and Holistic Medicine`}</CardText> */}
                <div className="row">
                  <OutboundLink
                    href={`mailto:${'jforbush@ocfm.com'}`}
                    className="fa fa-envelope"
                    style={{ margin: 'auto 10px' }}
                  >
                    {}
                  </OutboundLink>
                  <OutboundLink
                    href={`https://www.ocfm.com`}
                    className="fas fa-link"
                    style={{ margin: 'auto 10px' }}
                  >
                    {}
                  </OutboundLink>
                </div>
              </CardBody>
            </Card>
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
