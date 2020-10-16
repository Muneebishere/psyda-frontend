import React from "react";
import FeatureCard from "components/Cards/FeatureCard.js"

class MLAnalysis extends React.Component {

  render() {
    return (
      <>
        <div className="content">
          <FeatureCard 
            title="Machine Learning Analysis" 
            text="All set. Lets run our algorithms to see what can we find out about your data. Fingers crossed!"/>
        </div>
      </>
    );
  }
}

export default MLAnalysis;