import React from 'react';
import {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import MovieCard from './MovieCard';
import MyYoutube from './youtube';
import BackGround from './Background';


// Date
// month
// eventcode
// eventTitle
// Trailer URL
// totalWTSCount: 292

class MovieRoom extends Component {

  state = {
    Video_Show_Card_Index : 0,
    Video_Show_name : "",
    Video_Show_lang : [],
    Video_Show_genre : [],
    Video_Code:"",
    Votes : 0,
    bgimage:"",
  }

  showVideoRequest = (Votes , ind , code , imgCode , name , lang , genre , Date , Month) => {
    console.log(ind);
    this.setState({
      Votes,
      Date,
      Month,
      Video_Show_name : name,
      Video_Show_lang : lang.split("|"),
      Video_Show_genre : genre.split("|"),
      Video_Show_Card_Index : ind,
      Video_Code : code,
      bgimage : 'https://in.bmscdn.com/events/moviecard/'+ imgCode + '.jpg',
    })
  }

  render()
  {

    const ColStyle = {
        display : "flex",
        justifyContent: "center",
    }
    
    const listii = this.props.Data.map(temp => {
        return (
         
          <React.Fragment>
          {
            this.state.Video_Show_Card_Index == temp.index && (
              <React.Fragment>
              <Col key = {temp.index} sm = {12}>
              <MyYoutube videoCode = {this.state.Video_Code} name = {this.state.Video_Show_name} lang = {this.state.Video_Show_lang} genre = {this.state.Video_Show_genre} Votes = {this.state.Votes} date = {this.state.Date} month = {this.state.Month} />
              </Col>
             
              </React.Fragment>
            )
          }

          <Col key = {temp.EventCode} xl = {2} lg = {3} md = {4} sm = {6} xs = {12} style = {ColStyle}>
            <MovieCard 
            showVideoRequest = {this.showVideoRequest} 
            index = {temp.index} 
            Code = {temp.EventCode} 
            Date = {temp.Date} 
            Month = {temp.Month} 
            Title = {temp.EventTitle} 
            TrailerURL = {temp.TrailerURL} 
            Votes = {temp.Votes}
            name = {temp.EventTitle}
             lang = {temp.EventLanguage} 
             genre = {temp.Genre}
            />     
         </Col>
         </React.Fragment>
          
           
        );
    })

    return (
      <div className="MovieRoom">
        <BackGround bg = {this.state.bgimage}/>
            <Row>
                {listii}
            </Row>
      </div>
    );
  }
 
}

export default MovieRoom;
