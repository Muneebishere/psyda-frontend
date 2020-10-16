import React from "react";
import FeatureCard from "components/Cards/FeatureCard.js"

class FeatureEngineering extends React.Component {

  render() {
    return (
      <>
        <div className="content">
          <FeatureCard 
            title="Feature Engineering" 
            text="Whoa! That was some work. Your data looks great! Now find out the most relevant variables for our analysis."/>
        </div>
      </>
    );
  }
}

export default FeatureEngineering;