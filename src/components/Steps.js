import React from 'react';
import {
  Card,
  CardSubtitle,
  CardBody,
} from 'reactstrap'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

export default class Steps extends React.Component {

  render() {
    const steps = this.props.data;

    function getStepInfo(index) {
      if (index === 0) {
      return (
        <ul className="list-unstyled">
          {steps.step1.map((feature) => {
            return (
              <React.Fragment>
                <li key={feature} style={{margin: "auto 0px"}}>{feature}</li>
                <br />
              </React.Fragment>
            )
          })} 
        </ul>
      )
      } else if (index === 1) {
        return (
          <ul className="list-unstyled">
            {steps.step2.map((feature) => {
              return (
                <React.Fragment>
                  <li key={feature} style={{margin: "auto 0px"}}>{feature}</li>
                  <br />
                </React.Fragment>
              )
            })} 
          </ul>
        )
      } else if (index === 2) {
        return (
          <ul className="list-unstyled">
            {steps.step3.map((feature) => {
              return (
                <React.Fragment>
                  <li key={feature} style={{margin: "auto 0px"}}>{feature}</li>
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
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous"></link>
        {steps.stepNames.map((_, index) => {
          return (
            <div key={steps.stepNames[index]} className="col-md-4 col-lg-4 col-sm-12 col-xs-12" style={{margin: "0 auto"}}>
              <Card>
                <CardBody>
                  <CardSubtitle tag="h5" style={{fontWeight: "bold", textAlign: "center"}}>{steps.stepNames[index]}</CardSubtitle>
                  <br />
                  {getStepInfo(index)}
                </CardBody>
              </Card>
            </div>
          )
        })}
      </React.Fragment>
    );
  }
}

Steps.propTypes = {
  data: PropTypes.object.isRequired,
  styles: PropTypes.object
}