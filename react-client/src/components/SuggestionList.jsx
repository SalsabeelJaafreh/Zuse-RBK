import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';

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

  render(){
   return (

    <div className="container">
      <br></br>

    {this.props.suggestions.map(suggestion =>
      <span className="border border-primary">
      <div id='table2'>
      <div id ='table'id="suggestionPre">
      <p className="pad">{suggestion.name+": "+suggestion.content}

      </p>


      </div>

      <div className="counter">
          <p className="text-right"> likes {suggestion.count}</p>
          <div>
            <button id='like' type="button" onClick={()=> this.submit(suggestion._id,suggestion.count-1)}>👎Unlike</button>
            <button id='like' type="button" onClick={()=> this.submit(suggestion._id,suggestion.count+1)}>❤️Like</button>

          </div>


      </div>
      </div>

</span>
      )}
      <br></br>
      <br></br>
      <br></br>


    </div>

    )
 }
}


export default SuggestionList;
