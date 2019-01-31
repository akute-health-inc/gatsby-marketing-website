import React from 'react';
import {
  Container,
} from 'reactstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import appleStoreImage from '../images/Download_on_the_App_Store_Badge.svg';
import googleStoreImage from '../images/google-play-badge.png';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

export default class AppStore extends React.Component {
 
  render() {
    const appStoreDownload = this.props.data.edges[0].node.childContentfulPatientPageDownloadBannerJsonNode;
    const appStoreImages = [appleStoreImage, googleStoreImage];
    const appStoreElements = (
      <div className="row justify-content-center">
        {appStoreDownload.links.map((link, index) => {
          return (
            <div key={link} className="col-md-3 col-sm-4">
              <OutboundLink href={link}><img style={{width: "200px"}} className="mx-auto d-block" src={appStoreImages[index]} alt="" /></OutboundLink>
            </div>
          )
        })}
      </div>
    )

    return (
      <Container>
        <h1 className="text-center">{appStoreDownload.title}</h1>
        <p className="text-center">{appStoreDownload.subtitle}</p>
        {appStoreElements}
        <br />
      </Container>
    )
  }
}

AppStore.propTypes = {
  data: PropTypes.object.isRequired,
  styles: PropTypes.object
}
