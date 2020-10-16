import React from "react";
import FeatureCard from "components/Cards/FeatureCard.js"

class NeuralNetworks extends React.Component {

  render() {
    return (
      <>
        <div className="content">
          <FeatureCard 
            title="Neural Networks & Classification" 
            text="Got more than 50,000 cases? Amazing! Lets put it through our Neural Network Algorithms to see what we can find out from your data."/>
        </div>
      </>
    );
  }
}

export default NeuralNetworks;