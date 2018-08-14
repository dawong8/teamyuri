import React, { Component } from 'react'; 
import { Slide } from 'react-slideshow-image';
import { Cell, Grid, Button, Card, CardTitle, CardText} from 'react-mdl';


const images = [
  require('../images/cover1.jpg'),
  require('../images/cover2.jpg'),
  require('../images/cover.png'),

];


const Slideshow = () => {
    return (
        <Slide
          images={images}
          duration={5000}
          transitionDuration={1000}
        />
    )
}

class LandingPage extends Component {
	render() {

		return (
				<div> 
					{/* Website Cover: Slideshow */}
					<div style={{width: '75%', margin:'auto', padding:'50px'}}> 

						<Slideshow />
					</div>

					{/* Members */}
					<div className="container">
						<div style={{width: '80%', margin: 'auto'}}>
						    
							<div className="box"> 
							    <p> Latest Videos</p>
							</div>
						    <Grid>
						    	

								
						        <Cell col={6}>

									<iframe width="100%" height="315" src="https://www.youtube.com/embed/lvAE8s9RkW8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

						        </Cell>
						        <Cell col={6}>
						        	<iframe width="100%" height="315" src="https://www.youtube.com/embed/TA3Uo3a9674" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
						        </Cell>


						    </Grid>			
						</div>
					</div>

					{/* Videos, Shop, Game, and Latest Blog Posts (?) */}



					{/* About */}

					<div className="panel"> 

						<h3> TEAM YURI </h3>
						<p className="italics"> Under the sun.</p>
						<img style={{width: '50%', height:'auto' }} src={require('../images/team.png')} />
						<br /> 
						<br />
						<p style={{width: '75%', margin: 'auto'}}> 
						I am Yuri. I started streaming a few years ago and I came to realize that the community was a lot more toxic than it had to be. I always thought a little trolling is funny, friendly banters spice up conversations and a little sarcasm could be appreciated. That wasn’t what I experienced as a streamer. I’ve had people attack me for the way I look, the way I sound and people who legitimately would not stop harassing me. I came to realize that there is a part of this gaming universe I escape to that’s simply unsafe and unkind. That’s when I decided, I’m going to start my own community. One where people like myself could escape to and find solace without being afraid to show everyone who they really are. I brought together a group of very talented people to start a movement. We call it “Under the Sun”. We decided to become a collaborative channel and be known as Team Yuri. We want to reach out and shape our own little community where people get to meet people and you will be accepted for who you are. A place where regardless of your race, religion and sexual orientation, you will belong. Because there is only one race under the sun — The human race. We want to reach out to people through our content and influence people one at a time. So if you ever feel like you could use a friend or just someone to talk to, you know where we’ll be. If you feel like you don’t belong, then come to us. Because with us, you’ll always feel like you have someone to lean on and a place you can fit in.

						</p>

					</div>




				</div>


			); 

	}
}

export default LandingPage; 