import React from "react";
import logo from "logo.svg";
import {
  Button,
} from "reactstrap";

import history from '../history';

class Landing extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black",
      activeColor: "info",
    };
  }

	render() {
		return (
			<div className="wrapper landing bg">
				<div className="content text-center">
					<div className="logo-img"><img src={logo} alt="react-logo" /></div>
					<h3 className="title">Sherlock</h3>
					<p>Good Evening! Let's get started!</p>
					<Button onClick={() => history.push("/admin/dashboard")} color="primary">Start!</Button>
				</div>	
			</div>
		);
	}
}
  
export default Landing;