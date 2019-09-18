import React from "react";
import { Component } from "react";
import DropDownBtn from "./DropDownBtn";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
  Row,
  Col,
  Container
} from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

class MyNav extends Component {
  state = {
    filter: []
  };

  Mylistsjonra = ["Action", "Drama", "Horror"];
  Mylistslang = ["hindi", "english", "marathi"];

  addfilter = text => {
    this.setState({
      filter: [...this.state.filter, text]
    });
  };

  render() {
    const tabs = this.state.filter.map(temp => {
      return (
        <Badge
          key={temp}
          pill
          variant="dark"
          style={{ marginLeft: "10px" }}
          onClick={console.log("hry")}>
          {temp}
        </Badge>
      );
    });

    const AppliedFilters = {
      color: "white",
      marginTop: "10px",
      marginLeft: "30px"
    };

    return (
      <React.Fragment>
        <div className="Nav">
          <div className="leftSideNav">
            <span className="Basic">movie Trailers</span>
            <Button variant="info" className="ZombieFont white-text">
              Coming Soon
            </Button>
            <Button variant="secondary" className="ZombieFont white-text">
              Now Showing
            </Button>
          </div>

          <div className="rightSideNav">
            <DropDownBtn
              name="Jonras"
              list={this.Mylistsjonra}
              addFun={this.addfilter}
            />
            <DropDownBtn
              name="Rregionals"
              list={this.Mylistslang}
              addFun={this.addfilter}
            />
          </div>

          {console.log(this.state.filter)}
        </div>

        {this.state.filter.length > 0 && (
          <div style={AppliedFilters} className="ZombieFont">
            Applied Filters
            {tabs}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default MyNav;
