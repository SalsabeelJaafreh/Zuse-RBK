import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Button } from 'react-bootstrap';

class SuggestionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.submit=this.submit.bind(this);
  }



  submit(id,count) {

    console.log(count)
    $.ajax({
      type:'PUT',
      url: '/SuggestionList',
      data:{
        id:id,
        count:count
      },
      success: (data) => {
       this.props.submitlike(this.props.typelike)

     }
   });
  }

  render(){ return (

<div className="container">
    <br></br>

    {this.props.suggestions.map(suggestion =>
    <span className="border border-primary">
      <div >
      <div className="fon">

        <div className="panel panel-success fon">
          <div className="panel-heading">
            <h3 className="panel-title">{suggestion.name}</h3>
          </div>
          <div className="panel-body">
            {suggestion.content}
          </div>
        </div>

      </div>

      <div className="counter">
          <p className="text-right"> likes {suggestion.count}</p>
          <div>
            <Button id='like' className="btn btn-info" onClick={()=> this.submit(suggestion._id,suggestion.count+1)}>❤️Like</Button>
            <Button id='like' className="btn btn-danger" onClick={()=> this.submit(suggestion._id,suggestion.count-1)}>👎Unlike</Button>
              <br></br>
            <br></br>
          </div>

      </div>
      </div>

</span> )}
    <br></br>
    <br></br>
    <br></br>

</div>

) } }


export default SuggestionList;
