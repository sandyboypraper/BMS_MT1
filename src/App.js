import React from "react";
import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyNav from "./Components/Nav";

import axios from "axios";
import getData from "./API/getData";
import MovieRoom from "./Components/MovieRoom";
import { Row, Col } from "react-bootstrap";

class App extends Component {
  state = {
    data: [],
    sendToMovieRoom: []
  };

  componentDidMount() {
    var d = getData();

    var mr = [];

    var ind = 1;

    for (var dicele in d[1]) {
      var temp = {};
      temp.EventCode = d[1][dicele].EventCode;
      temp.Date = d[1][dicele].DispReleaseDate.split(",")[0].split(" ")[1];
      temp["Month"] = d[1][dicele]["DispReleaseDate"]
        .split(",")[0]
        .split(" ")[0]
        .slice(0, 3);
      temp["EventTitle"] = d[1][dicele]["EventName"];
      temp["Genre"] = d[1][dicele]["EventGenre"];
      temp["EventLanguage"] = d[1][dicele]["EventLanguage"];

      temp["TrailerURL"] = d[1][dicele]["TrailerURL"];
      temp["Votes"] = d[1][dicele]["csCount"];
      temp["index"] = ind;
      ind++;
      mr.push(temp);
    }

    this.setState({
      data: d,
      sendToMovieRoom: mr
    });
  }

  render() {
    {
      console.log(this.state.data);
    }
    return (
      <div className="App">
        <MyNav />

        <MovieRoom Data={this.state.sendToMovieRoom} />
      </div>
    );
  }
}

export default App;
