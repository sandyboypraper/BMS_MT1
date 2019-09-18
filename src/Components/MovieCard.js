import React from "react";
import { Component } from "react";
import {} from "react-bootstrap";
import $ from "jquery";
import { findDOMNode } from "react-dom";
import bgimage from "../Images/bg.jpg";
import Spinner from "react-bootstrap/Spinner";

class MovieCard extends Component {
  state = {
    Hover: false
  };

  handleHover = e => {
    this.setState({
      Hover: true
    });
  };

  handleLeave = e => {
    this.setState({
      Hover: false
    });
  };

  getMovieCode = () => {
    var url = this.props.TrailerURL;
    var VideoCode = "";

    if (url.indexOf("=") != -1) VideoCode = url.split("=")[1].split("&")[0];
    else {
      var temparr = url.split("/");
      VideoCode = temparr[temparr.length - 1];
    }

    return VideoCode;
  };

  getIndex = ind => {
    var index = this.props.index;
    var w = $(window).width();

    var number_Of_Element_in_a_row = 1;

    if (w >= 560) number_Of_Element_in_a_row = 2;
    if (w >= 743) number_Of_Element_in_a_row = 3;
    if (w >= 980) number_Of_Element_in_a_row = 4;
    if (w >= 1200) number_Of_Element_in_a_row = 6;
    if (w >= 1400) number_Of_Element_in_a_row = 6;

    console.log(number_Of_Element_in_a_row);

    var pressed_element = (index - 1) % number_Of_Element_in_a_row;

    console.log(pressed_element);

    return index - pressed_element;
  };

  render() {
    const imgstyle = {
      width: "100%",
      height: "100%"
    };

    const colorgradient = {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: "0px",
      left: "0px",
      backgroundImage: "linear-gradient(rgba(0 , 0 , 0 , 0) 20% , black)"
    };

    const date = {
      position: "absolute",
      top: "5px",
      right: "5px",
      padding: "10px",
      backgroundColor: "#17a1b8",
      borderRadius: "50px",
      fontSize: "10px",
      fontWeight: "bold",
      textAlign: "center",
      margin: "0px",
      lineHeight: "0.7"
    };

    const vote = {
      position: "absolute",
      bottom: "5px",
      right: "0px",
      color: "white"
    };

    const votes = {
      fontSize: "10px",
      margin: "0px",
      lineHeight: "0.6"
    };

    const icon = {
      color: "#17a1b8"
    };

    const month = {
      fontSize: "8px"
    };

    const playIcon = {
      position: "absolute",
      left: "50%",
      top: "50%",
      color: "white",
      fontSize: "30px",
      transform: "translate(-50% , -50%)",
      transitionDuration: "100ms"
    };

    const playIconHoverd = {
      position: "absolute",
      left: "50%",
      top: "50%",
      color: "white",
      fontSize: "50px",
      transform: "translate(-50% , -50%)",
      transitionDuration: "100ms"
    };

    const movietitle = {
      marginTop: "2px",
      fontSize: "10px",
      fontWeight: "bold"
    };

    return (
      <div
        className="MovieCard"
        ref="movie_card"
        onClick={() =>
          this.props.showVideoRequest(
            this.props.Votes,
            this.getIndex(),
            this.getMovieCode(),
            this.props.Code,
            this.props.name,
            this.props.lang,
            this.props.genre,
            this.props.Date,
            this.props.Month
          )
        }
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleLeave}>
        <img
          style={imgstyle}
          src={
            "https://in.bmscdn.com/events/moviecard/" + this.props.Code + ".jpg"
          }
        />
        <div style={colorgradient}></div>

        <div style={date}>
          {this.props.Date}
          <br />
          <span style={month}>{this.props.Month}</span>
        </div>

        {this.state.Hover ? (
          <div style={playIconHoverd}>
            <i className="fa fa-play-circle"></i>
          </div>
        ) : (
          <div style={playIcon}>
            <i className="fa fa-play-circle"></i>
          </div>
        )}

        <div style={vote}>
          <i style={icon} className="fa fa-thumbs-up"></i>
          <span className="ZombieFont"> 100%</span>
          <br />
          <p className="ZombieFont" style={votes}>
            {this.props.Votes} votes
          </p>
        </div>

        <p style={movietitle} className="ZombieFont">
          {this.props.Title}
        </p>
      </div>
    );
  }
}

export default MovieCard;
