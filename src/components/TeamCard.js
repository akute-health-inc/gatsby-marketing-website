import React from 'react';
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  CardBody,
  CardImg,
} from 'reactstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

export default class TeamCard extends React.Component {
  render() {
    const person = this.props.data;
    const index = this.props.index;

    return (
      <div className="col-md-6 col-lg-4 col-sm-12 col-xs-12 col-md-offset-6" style={{margin: "0 auto"}}>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"></link>
        <Card>
          <CardImg top width="100%" src={person.profilePics[index].fluid.src} alt={person.names[index]} />
          <CardBody>
            <CardTitle style={{fontWeight: "bold"}}>{person.names[index]}</CardTitle>
            <CardSubtitle style={{fontStyle: "oblique"}}>{person.titles[index]}</CardSubtitle>
            <CardText>{person.bios[index]}</CardText>
            <div className="row">
              <a href={person.twitters[index]} className="fab fa-twitter" style={{margin: "auto 10px"}}>{}</a>
              <a href={person.linkedIns[index]} className="fab fa-linkedin-in" style={{margin: "auto 10px"}}>{}</a>
              <a href={`mailto:${person.emails[index]}`} className="fa fa-envelope" style={{margin: "auto 10px"}}>{}</a>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

TeamCard.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}