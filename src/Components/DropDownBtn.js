import React from 'react';
import {Component} from 'react';
import M from 'materialize-css';

import Dropdown from 'react-bootstrap/Dropdown';

class DropDownBtn extends Component {

   state = {
     list : [],
   }


    componentDidMount(){
      this.setState({
        list: this.props.list
      })
    }


    listAfterDelete = (text) => {
      return this.state.list.filter(function(ele){
        return ele != text;
      })
    }


    clicked = (e)=>{
      console.log(this.props);  
      this.props.addFun(e.target.text);
      this.setState({
        list: this.listAfterDelete(e.target.text),
      })
    }

    

    render(){

        return (
            <div className="DropDownBtn">
                <Dropdown >
                    
                    <Dropdown.Toggle variant="success" className = "ZombieFont" id="dropdown-basic">
                      {this.props.name}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className = "DropDownList">
                      {
                        this.state.list.map(temp => {
                        return (
                          <Dropdown.Item key = {temp} onClick = {this.clicked}>{temp}</Dropdown.Item>
                        )
                      })
                      }
                    </Dropdown.Menu>
                  
                </Dropdown>
            </div>
          );    
    }
 
}

export default DropDownBtn;