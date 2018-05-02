
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Button} from 'react-bootstrap'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to:'',
      content:'',
      input:'',
      ismessagehiddin:true

    };

    this.onChange=this.onChange.bind(this);
    this.showmessagebox=this.showmessagebox.bind(this);
    this.addMessage=this.addMessage.bind(this);
  }

  onChange (e) {
    this.setState({
     [e.target.name]: e.target.value
   });
  }

// if any user can reuse any stuff he can press on the donar name and message him.
showmessagebox(to,content){
  this.setState({
    ismessagehiddin: ! this.state.ismessagehiddin,
    to: to,
    content:content
  });
}

addMessage(to,content) {

  $.ajax({
    type:'POST',
    url: '/Message',
    data:{
     From:this.props.name,
     to:to,
     content:content
   },
   success: (data) => {

    this.showmessagebox("","");
    this.setState({input:''});
    alert("Your message is sent");
  },
});
}

render(){
 return (
  <div className="container-fluid col-md-offset-0">

  {this.props.extraa.map(item =>
   <div className="" id ='table2'>
   <div>

   <h1>{"Material Type: "+item.select}</h1>
   <div className="well gfont"><b>{item.name+": "+item.post}</b></div>
   <Button onClick={()=> this.showmessagebox(item.name,item.post)} >{"Show/Hide"}</Button>
   </div>
   <br></br>

   <div>

   {this.state.ismessagehiddin ? null : (this.state.content==item.post)?<div className="input-group input-group-lg"><input className="form-control"  placeholder="Send a message..." onChange={this.onChange} value={this.state.input} name="input"/><div class="input-group-append"><Button className="btn btn-outline-secondary btn-lg" onClick={()=> this.addMessage(this.state.to,this.state.input)}>Send</Button></div>  </div>:null}

   </div>
   </div>
   )}

  </div>

  )
}
}

export default Home;
