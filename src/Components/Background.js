import React from 'react';
import {Component} from 'react';
import bgimage from '../Images/bg.jpg';



class BackGround extends Component {

  render(){
    const Mystyle = {
      position:"fixed",
      top:"50px",
      left:"0px",   
      height:"90vh",
      width:"100%",
      backgroundImage : "url(" + this.props.bg + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      opacity:"0.2",
      filter:"blur(5px)",
      zIndex:"-1000",
    }

    return (
      <div style = {Mystyle} className="BackGround">
      </div>
    );
  }

 
}

export default BackGround;