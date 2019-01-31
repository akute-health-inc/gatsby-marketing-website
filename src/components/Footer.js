import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
} from 'reactstrap';
import Img from 'gatsby-image';
import 'bootstrap/dist/css/bootstrap.css';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

export default class Footer extends React.Component {
  render() {
    const data = this.props.data.edges[0].node;
    
    return (
      <div className="footer" style={{backgroundColor: "#333C44"}}>
        <Container>
        <br />
        <div className="row">
          <div className="col-lg-4">
            <a href="/" style={{color: "white"}}>{data.companyName}</a>
            <p></p>
            <p style={{color: "white", fontSize: "0.8rem"}}>&copy; {data.companyName} 2019. All Rights Reserved.</p>
          </div>
          <div className="col-lg-4" style={{color: "white", fontSize: "0.8rem"}}>
            Email us at{' '}
            <OutboundLink
              style={{color: "white", fontSize: "0.8rem"}}
              href={`mailto:${data.companyContactEmail}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.companyContactEmail}
            </OutboundLink>
          </div>
          <div className="col-lg-4">
            {data.socialPages.map((socialPage, index) => {
              return (
                <OutboundLink
                key={socialPage}
                style={{color: "white", fontSize: "0.8rem", marginRight: "10px"}}
                href={socialPage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img fixed={data.socialImages[index].fixed} alt={data.socialImages[index].title} />
              </OutboundLink>
              )
            })}
          </div>
        </div>
        </Container>
      </div>
    )
  }
}

Footer.propTypes = {
  data: PropTypes.object.isRequired
}