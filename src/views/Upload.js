import React from "react";
import { Card, 
         CardHeader, 
         CardBody, 
         CardTitle, 
         Row,
} from 'reactstrap'
import Table from "components/Table/Tables.js"
import FeatureCard from "components/Cards/FeatureCard.js"

class Upload extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <FeatureCard 
            title="Upload Your Data" 
            text="Lets get started by uploading your data. In this stage, we will import, analyze your data to calculate means, median, standard deviations, skewness, kurtosis and display bell curves."/>

          <Card>
            <CardHeader>
              <CardTitle tag="h4">Uploaded Data</CardTitle>
            </CardHeader>
            <CardBody>
              <Table/>
            </CardBody>
          </Card>
          
        </div>
      </>
    );
  }
}

export default Upload;
