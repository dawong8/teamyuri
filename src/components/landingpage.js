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



					{/* About */}
					<div className="backdrop"> 
						<div style={{padding:'50px'}}> 
							<div className="panel" style={{padding:'50px'}}> 
								<img style={{width: '10%', height:'auto' }} src={require('../images/yuri.png')} />

								<p style={{ fontSize: '35px'}}> Message from Yuri </p>
								<p className="italics"> Under the sun.</p>

								<br /> 
								<p style={{width: '75%', margin: 'auto'}}> 
								I am Yuri. I started streaming a few years ago and I came to realize that the community was a lot more toxic than it had to be. I always thought a little trolling is funny, friendly banters spice up conversations and a little sarcasm could be appreciated. That wasn’t what I experienced as a streamer. I’ve had people attack me for the way I look, the way I sound and people who legitimately would not stop harassing me. I came to realize that there is a part of this gaming universe I escape to that’s simply unsafe and unkind. That’s when I decided, I’m going to start my own community. One where people like myself could escape to and find solace without being afraid to show everyone who they really are. I brought together a group of very talented people to start a movement.				</p>

							</div>
						</div>
					</div>

					{/* Members */}
					<div className="">
						<div style={{width: '80%', margin: 'auto'}}>
						    <div className="fancy-font" > 
							    <p style={{fontSize:'35px'}}> Meet the Members</p>	 
							</div>
						    <Grid style={{paddingBottom:'120px'}}>

						        <Cell col={2}>

									<img className="blur" style={{width: '75%', height:'85%' }} src={'https://pre00.deviantart.net/b6a2/th/pre/f/2018/189/d/1/2_by_edalie_chan-dcgo1uh.png'} />
						        </Cell>
						        <Cell col={2}>

									<img className="blur" style={{width: '75%', height:'95%' }} src={('https://pre00.deviantart.net/0694/th/pre/f/2018/189/d/2/1_by_edalie_chan-dcgo1vg.png')} />
						        </Cell><Cell col={2}>

									<img className="blur" style={{width: '75%', height:'85%' }} src={('https://pre00.deviantart.net/2331/th/pre/f/2018/189/a/2/4_by_edalie_chan-dcgo1t6.png')} />
						        </Cell><Cell col={2}>

									<img className="blur" style={{width: '75%', height:'85%' }} src={('https://pre00.deviantart.net/4df6/th/pre/f/2018/189/a/a/3_by_edalie_chan-dcgo1tp.png')} />
						        </Cell><Cell col={2}>

									<img className="blur" style={{width: '75%', height:'85%' }} src={require('../images/jayden.png')} />
						        </Cell>
						        <Cell col={2}>

									<img className="blur" style={{width: '75%', height:'75%' }} src={require('../images/ann.png')} />
						        </Cell>
								<Cell col={2}>
									<p className="box"> SUGAR </p>
						        </Cell>
								<Cell col={2}>
									<p className="box"> YURI </p>
						        </Cell><Cell col={2}>
									<p className="box"> CLIP </p>
						        </Cell><Cell col={2}>
									<p className="box"> MOMO </p>
						        </Cell><Cell col={2}>
									<p className="box"> JAYDEN </p>
						        </Cell><Cell col={2}>
									<p className="box"> TRAGEDY </p>
						        </Cell>
						    </Grid>	


							{/* Videos */ }
							<div className="box" > 
							    <p style={{fontSize:'35px'}}> Latest Videos</p>	 
							</div>
						    <Grid style={{paddingBottom:'150px'}}>

						        <Cell col={6}>

									<iframe width="100%" height="315" src="https://www.youtube.com/embed/lvAE8s9RkW8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

						        </Cell>
						        <Cell col={6}>
						        	<iframe width="100%" height="315" src="https://www.youtube.com/embed/TA3Uo3a9674" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
						        </Cell>


						    </Grid>		



						    <Grid style={{paddingBottom:'20px'}}> 
						    	<Cell col={4}>

									<div className="fancy-font" > 
									    <p style={{fontSize:'35px'}}> Shop </p>	 
									</div>
								</Cell>
								<Cell col={4}>

									<div className="fancy-font" > 
									    <p style={{fontSize:'35px'}}> Games </p>	 
									</div>
								</Cell>
								<Cell col={4}>

									<div className="fancy-font" > 
									    <p style={{fontSize:'35px'}}> Blog </p>	 
									</div>
								</Cell>
								<Cell col={4}>

									<img style={{width: '100%', height:'100%' }} src={'https://static1.squarespace.com/static/5782ae45414fb585ab372cbd/5a79f940f9619a6fa1424052/5a79f943c83025d6ef23ba21/1517944934814/tshirt.jpg?format=300w'} />
						        </Cell><Cell col={4}>

									<img style={{width: '70%', height:'70%' }} src={('https://i.ebayimg.com/images/g/GFIAAOSwxcRW9DVC/s-l300.jpg')} />
						        </Cell><Cell col={4}>

									<img style={{width: '70%', height:'70%' }} src={('https://static1.squarespace.com/static/59f217ff6f4ca3b7ef20c7f7/59f272480d9297adf930e3dc/59f2737764265f30648cc12e/1527713426859/Nonfiction-Pen-Paper-Writing-Workshops-fountain-pen-notebook.jpg?format=300w')} />
						        </Cell>

						    </Grid>

						    
						    	
						</div>
					</div>

					{/* Videos, Shop, Game, and Latest Blog Posts (?) */}



					



				</div>


			); 

	}
}

export default LandingPage; 