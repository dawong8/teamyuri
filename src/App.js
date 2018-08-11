import React, { Component } from 'react';

import Main from './components/main';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import './app.css';


class App extends React.Component {
	render () {
		return (
			<div>

				{/* Uses Link transparent header that draws on top of the layout's background */}
				<div style={{height: '700px', position: 'relative'}}>
				    <Layout >
				        <Header transparent title="" style={{color: '#000'}}>
				            <Navigation>
				            	<Link to="/"> HOME</Link> 
				                <Link to="/watch"> WATCH </Link>
				                <Link to="/watch"> MEMBERS </Link>
				                <Link to="/"> BLOG </Link>
				                <Link to="/projects"> PLAY </Link>
				                <Link to="/projects"> SHOP </Link>
				            </Navigation>
				        </Header>
				        <Drawer title="">

				            <Navigation>
				            	<Link to="/"> HOME</Link> 
				                <Link to="/resume"> WATCH </Link>
				                <Link to="/watch"> MEMBERS </Link>
				                <Link to="/projects"> BLOG </Link>
				                <Link to="/projects"> PLAY </Link>
				                <Link to="/projects"> SHOP </Link>
				            </Navigation>
				        </Drawer>


				        <Content />
				    </Layout>
				</div>
				<Main />


			</div> 


			);
	}
}

export default App; 