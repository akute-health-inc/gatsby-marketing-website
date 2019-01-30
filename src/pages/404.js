import React from 'react';
import {
  Container,
} from 'reactstrap';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Container>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>This page does not exist... the sadness.</p>
  </Container>
)

export default NotFoundPage
