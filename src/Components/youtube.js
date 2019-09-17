import React from 'react';
import {Component} from 'react';
import {Row,Col} from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import YouTube from 'react-youtube';
import Discription from './Discription';

// ) :
            // (
            //   <YouTube
            //   videoId={this.props.videoCode}
            //   opts={opts}
            //   onReady={this.onVideoReady}
            // />
            // )

class MyYoutube extends Component {


  state = {
    ready: false,
  }


  onVideoReady = (event) => {
    // access to player in all event handlers via event.target
    this.setState({
      ready:true
    })
    event.target.playVideoAt(50);
  }
  
  render() {
    const opts = {
      height: '390',
      width: '100%',
      marginBottom: "100px",
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    
 
    return (
      <React.Fragment style = {{position:"relative" , top:"0px" , left : "0px"}}>
        {
          !this.state.ready && (
            <div style = {{width:"100%" , height : "100%" ,
             display:"flex" , justifyContent:"center" ,
              alignItems : "center" , color : "#17a1b8" ,
               position:"absolute" , top : "auto" ,
                right : "25%"}}>
            <Spinner animation="grow" />
            </div>
          )
            
        }
        <Row>
          <Col sm = {12} md = {7}>
           <YouTube
              videoId={this.props.videoCode}
              opts={opts}
              onReady={this.onVideoReady}
            />
          </Col>
          <Col sm = {12} md = {5} style = {{display:"flex", alignItems:"center"}}>
                <Discription name = {this.props.name} date = {this.props.date} month = {this.props.month} lang = {this.props.lang} genre = {this.props.genre} Votes = {this.props.Votes} />  
          </Col>
            
   </Row>
      </React.Fragment>
    );
  }
 
 
}

export default MyYoutube;
