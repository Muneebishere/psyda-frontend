import React, { Component } from "react";

import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';
import {Button} from "reactstrap";

class FeatureCard extends Component {
  render(){
    return(
      <Card>
        <CardHeader><p className="h3 mb-0">{this.props.title}</p></CardHeader>
        <CardBody>
          <CardText>{this.props.text}</CardText>
          <Button href="#" color="primary">Upload</Button>
        </CardBody>
      </Card>
    )
  }
}

export default FeatureCard;