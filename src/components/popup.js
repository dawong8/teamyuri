import React, { Component } from 'react';
import { Dialog, DialogTitle, Button, DialogContent, DialogActions,  Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';




class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  render() {
    return (
      <div>
        <Button  onClick={this.handleOpenDialog} ripple> <p className="box"> Members </p></Button>
        <Dialog open={this.state.openDialog} onCancel={this.handleCloseDialog}>
          <DialogTitle> <p className="box"> Which one? </p> </DialogTitle>
          <DialogContent>
            <Link to="/resume" style={{ textDecoration: 'none', color:'black' }}> <img onClick={this.handleCloseDialog} style={{padding:'10px', width:'25%'}}src={require('../images/yuri.png')}/> Yuri</Link> <br/>         
            <Link to="/resume" style={{ textDecoration: 'none', color:'black' }}> <img onClick={this.handleCloseDialog} style={{padding:'10px', width:'25%'}}src={require('../images/clip.png')}/> Clip </Link> <br/>         
            <Link to="/resume" style={{ textDecoration: 'none', color:'black' }}> <img onClick={this.handleCloseDialog} style={{padding:'10px', width:'25%'}}src={require('../images/momo.png')}/> Momo</Link> <br/>         
            <Link to="/resume" style={{ textDecoration: 'none', color:'black' }}> <img onClick={this.handleCloseDialog} style={{padding:'10px', width:'25%'}}src={require('../images/sugar.png')}/> Sugar</Link> <br/>         
            <Link to="/resume" style={{ textDecoration: 'none', color:'black' }}> <img onClick={this.handleCloseDialog} style={{padding:'10px', width:'25%'}}src={require('../images/jayden.png')}/> Jayden</Link> <br/>         


          </DialogContent>
          <DialogActions>
            {/*<Button type='button'></Button>*/}
            <Button type='button' onClick={this.handleCloseDialog}>Never mind</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Popup; 