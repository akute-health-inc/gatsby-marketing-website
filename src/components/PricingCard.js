import React from 'react'
import { Card, CardSubtitle, CardBody, CardHeader } from 'reactstrap'
import PropTypes from 'prop-types'
import EmailForm from './emailForm'
import 'bootstrap/dist/css/bootstrap.css'

export default class PricingCard extends React.Component {
  render() {
    const tiers = this.props.data
    const styles = this.props.styles

    function getPlan(index) {
      if (index === 0) {
        return (
          <ul className="list-unstyled">
            {tiers.proFeatures.map(feature => {
              return (
                <li key={feature} style={{ margin: 'auto 0px' }}>
                  {feature}
                </li>
              )
            })}
          </ul>
        )
      } else if (index === 1) {
        return (
          <ul className="list-unstyled">
            {tiers.basicFeatures.map(feature => {
              return (
                <li key={feature} style={{ margin: 'auto 0px' }}>
                  {feature}
                </li>
              )
            })}
          </ul>
        )
      } else if (index === 2) {
        return (
          <ul className="list-unstyled">
            {tiers.enterpriseFeatures.map(feature => {
              return (
                <li key={feature} style={{ margin: 'auto 0px' }}>
                  {feature}
                </li>
              )
            })}
          </ul>
        )
      }
    }

    return (
      <React.Fragment>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        />
        {tiers.prices.map((_, index) => {
          return (
            <div
              key={tiers.planNames[index]}
              className="col-md-4 col-lg-4 col-sm-12 col-xs-12"
              style={{ margin: '0 auto' }}
            >
              <Card>
                <CardHeader className="text-center" tag="h5">
                  {tiers.planNames[index]}
                </CardHeader>
                <CardBody>
                  <CardSubtitle
                    tag="h5"
                    style={{ fontWeight: 'bold', textAlign: 'center' }}
                  >
                    {tiers.prices[index]}
                  </CardSubtitle>
                  <br />
                  {getPlan(index)}
                  <EmailForm
                    styles={styles}
                    name={'Basic'}
                    signupPage={this.props.signupPage}
                  >
                    {tiers.ctas[index]}
                  </EmailForm>
                </CardBody>
              </Card>
            </div>
          )
        })}
      </React.Fragment>
    )
  }
}

PricingCard.propTypes = {
  data: PropTypes.object.isRequired,
  styles: PropTypes.object,
}
