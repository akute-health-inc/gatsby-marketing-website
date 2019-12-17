import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'
import '../css/listItem.css'

export default class ComparisonCard extends React.Component {
  render() {
    const tiers = this.props.data

    function getFeatures(index) {
      if (index === 0) {
        return (
          <ul className="list-unstyled">
            {tiers.inHouseFeatures.map((feature, index) => {
              // let itemClass = ''
              // if (index === 0) {
              //   itemClass = 'good'
              // } else {
              //   itemClass = 'bad'
              // }
              return (
                <React.Fragment>
                  <li
                    className="good"
                    key={feature}
                    style={{ margin: 'auto 0px' }}
                  >
                    {feature}
                  </li>
                  <br />
                </React.Fragment>
              )
            })}
          </ul>
        )
      } else if (index === 1) {
        return (
          <ul className="list-unstyled">
            {tiers.akuteHealthFeatures.map(feature => {
              return (
                <React.Fragment>
                  {/* <div className="row">
                  <i class="fas fa-check-circle"></i> */}
                  <li
                    className="good"
                    key={feature}
                    style={{ margin: 'auto 0px' }}
                  >
                    {feature}
                  </li>
                  <br />
                  {/* </div> */}
                </React.Fragment>
              )
            })}
          </ul>
        )
      } else if (index === 2) {
        return (
          <ul className="list-unstyled">
            {tiers.othersFeatures.map(feature => {
              return (
                <React.Fragment>
                  <li
                    className="good"
                    key={feature}
                    style={{ margin: 'auto 0px' }}
                  >
                    {feature}
                  </li>
                  <br />
                </React.Fragment>
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
        {tiers.choiceType.map((_, index) => {
          return (
            <div
              key={tiers.choiceType[index]}
              className="col-md-4 col-lg-4 col-sm-12 col-xs-12"
              style={{ margin: '0 auto' }}
            >
              <Card>
                <CardHeader className="text-center" tag="h5">
                  {tiers.choiceType[index]}
                </CardHeader>
                <CardBody>
                  {/* <CardSubtitle tag="h5" style={{fontWeight: "bold", textAlign: "center"}}>{tiers.prices[index]}</CardSubtitle> */}
                  {/* <br /> */}
                  {getFeatures(index)}
                  {/* <EmailForm styles={styles} name={tiers.choiceType[index]}>{tiers.ctas[index]}</EmailForm> */}
                </CardBody>
              </Card>
            </div>
          )
        })}
      </React.Fragment>
    )
  }
}

ComparisonCard.propTypes = {
  data: PropTypes.object.isRequired,
  styles: PropTypes.object,
}
