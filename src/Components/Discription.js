import React from "react";
import { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Discription extends Component {
  render() {
    const Title = {
      fontSize: "20px",
      marginBottom: "0px"
    };

    const Lang = {
      fontSize: "15px",
      color: "white",
      marginTop: "0px",
      fontWeight: "100",
      marginBottom: "0px"
    };

    const badges = {
      padding: "5px 10px 5px 10px",
      border: "0.5px solid white",
      borderRadius: "10px",
      color: "white",
      backgroundColor: "transparent",
      fontSize: "10px",
      fontWeight: "100",
      marginRight: "15px"
    };

    const Votes = {
      display: "inline-block",
      marginTop: "20px",
      marginRight: "20px"
    };

    const discription = {
      fontSize: "10px",
      color: "white",
      marginTop: "20px"
    };

    const BottomIcon = {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px"
    };

    const center = {
      textAlign: "center"
    };

    const icon = {
      color: "white"
    };

    const icongreen = {
      color: "green"
    };

    const iconorange = {
      color: "orange"
    };

    const iconred = {
      color: "red"
    };

    const votesn = {
      color: "white",
      fontSize: "10px",
      marginTop: "0px",
      lineHeight: "0.1px",
      marginLeft: "20px"
    };

    const genre = this.props.genre.map(temp => {
      return (
        <span key={temp} style={badges}>
          {temp}
        </span>
      );
    });

    return (
      <div className="discription">
        <p style={Title} className="ZombieFont">
          {this.props.name}
        </p>
        <p style={Lang}>{this.props.lang}</p>
        <br />
        {genre}
        <br />
        <div style={Votes}>
          <i style={icon} className="fa fa-thumbs-up"></i>
          <span style={Lang}> 100% </span>
          <br />
          <span style={votesn}>{this.props.Votes} votes</span>
        </div>

        <div style={Votes}>
          <i style={icon} class="fa fa-calendar" aria-hidden="true"></i>
          <span style={Lang}>
            {" "}
            {this.props.date} {this.props.month}{" "}
          </span>
          <br />
          <span style={votesn}></span>
        </div>

        <div style={discription}>
          I Try to get the description but i can not find inside the API
          Response , So I writing this Sorry :(
        </div>

        <div style={BottomIcon}>
          <div style={center}>
            <i style={icongreen} className="fa fa-thumbs-up"></i>
            <p
              style={{
                color: "green",
                fontWeight: "lighter",
                fontSize: "10px"
              }}>
              WILL WATCH <br />
              (100)
            </p>
          </div>

          <div style={center}>
            <i style={iconorange} className="fa fa-thumbs-up"></i>
            <p
              style={{
                color: "orange",
                fontWeight: "lighter",
                fontSize: "10px"
              }}>
              MAY BE <br />
              (0)
            </p>
          </div>

          <div style={center}>
            <i style={iconred} className="fa fa-thumbs-up"></i>
            <p
              style={{ color: "red", fontWeight: "lighter", fontSize: "10px" }}>
              WON'T WATCH <br />
              (10)
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Discription;
