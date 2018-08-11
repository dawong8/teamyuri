import React, { Component } from 'react'; 

class LandingPage extends Component {
	render() {

		return (
				<div> 

					<div className="panel"> 

						<h3> TEAM YURI </h3>
						<p className="italics"> Under the sun.</p>
						<img src={require('../images/team.png')} />



					</div>
				{/* <br /> */}


				</div>


			); 

	}
}

export default LandingPage; 