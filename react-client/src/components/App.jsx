import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
  Route,
  Link,
  Switch,
  browserHistory,
  BrowserRouter as Router
} from "react-router-dom";

import SuggestionList from './SuggestionList.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import AboutUs from './AboutUs.jsx';
import Products from './Products.jsx';
import Contact from './Contact.jsx';
import DidYouKnow from './DidYouKnow.jsx';
import Videos from './Videos.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
//The code will depend on the data value which will be set through successful ajax to decide what to render.
dataa:"",
showAboutUsComponent:false,
showProductsComponent:false,
showContactComponent:false,
showMainComponent:true,
showVideosComponent:false,
};

this.showSignup=this.showSignup.bind(this);
this.showNav=this.showNav.bind(this);

}

showSignup() {
  this.setState({
   dataa:"changed"
 });
}
showNav(e){
  this.setState({
    showAboutUsComponent:false,
    showDidYouKnowComponent:false,
    showProductsComponent:false,
    showContactComponent:false,
    showMainComponent:false,
    showVideosComponent:false,
  })
  this.setState({
    [e.target.name]: true
  });


};

render() {
  if(this.state.dataa==""){
   return (

    <div className="">

    <nav className="navbar navbar-inverse">
    <div className="container-fluid">
    <div className="navbar-header">
    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    </button>



    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
    <ul className="nav navbar-nav">
    <li>  <a className="navbar-brand" href="#"name="showMainComponent" onClick={this.showNav}>Main</a></li>
    <li ><a href='#' name="showAboutUsComponent" onClick={this.showNav}>AboutUs</a></li>

     <li ><a href='#' name="showDidYouKnowComponent" onClick={this.showNav}>DidYouKnow</a></li>

    <li><a href="#" name="showProductsComponent" onClick={this.showNav}>Products</a></li>

    <li><a href="#" name="showContactComponent" onClick={this.showNav}>Contact</a></li>

    <li><a href="#" name="showVideosComponent" onClick={this.showNav}>Videos</a></li>
    
    </ul>
  {/*Router is needed so it can route to different components depending on the link(ex:Sign up here)the user clicked on*/}
  <ul className="nav navbar-nav navbar-right" >


  <Router history={browserHistory}>
  <li><Link className="icon-bar"  style={{color: 'white',paddingLeft: 13,textDecoration: 'none'}}  onClick={this.showSignup} to="/Signup">Signup</Link></li>


  </Router>
  <Router history={browserHistory}>
  <li><Link className="text-light " onClick={this.showSignup} to="/Login" style={{color: 'white',paddingLeft: 13,textDecoration: 'none'}}>Login</Link></li>
  </Router>
  </ul>
  </div>
  </div>
  </nav>
  <div className="jumbotron">
    <div className="container-fluid text-left">
      <h1 className="font-weight-bold">Second Hand Store</h1>
        <p>Reduce Reuse Recycle</p>
      </div>
    </div>

  {this.state.showMainComponent ? <Main/>:null}
  {this.state.showContactComponent ? <Contact/>:null}
  {this.state.showAboutUsComponent ? <AboutUs/>:null }
  {this.state.showDidYouKnowComponent ? <DidYouKnow/>:null }
  {this.state.showProductsComponent? <Products/>: null}
  {this.state.showVideosComponent ? <Videos/>: null}
  </div>
  );
 }
 else{
  return (
    <Router history={browserHistory}>
    <Switch>
    <Route path="/Signup" component={Signup}/>
    <Route path="/Login" component={Login}/>
    </Switch>
    </Router>
    )
}
}
}
//The Main componant can be put in different file like the Contact,AboutUs..etc.
class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      type:'',
      suggestions: []
    };
    this.submit=this.submit.bind(this);
    this.onChange=this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({
     [e.target.name]: e.target.value
   });
  }
  //data is stored in suggest schema which is the input value in Profile.jsx
  submit(type) {
    $.ajax({
      type:'POST',
      url: '/suggestions',
      data:{
        type:type,
      },
      success: (data) => {
        this.setState({
          suggestions:data
        })
      }
    });

  };

  render(){
    return(
      <div>
      <div class="container">

      <form>
      <div className="float form-group container-fluid text-center">
      <label for="sel1">Choose one of the material types:</label>

      <select className="form-control container-fluid" id="sel1"
        id='select' onChange={this.onChange} value={this.state.type} name="type">
      <option value="type">type</option>
      <option value="plastic">Plastic</option>
      <option value="clothes">Clothes</option>
      <option value="wood">Wood</option>
      <option value="iron">Iron</option>
      </select>

      </div>
      </form>

      </div>
      <br></br>
      <br></br>
      <center>
      <button className="btn btn-default"  type="button" onClick={()=> this.submit(this.state.type)}>Show suggestions</button>
    {/*submitlike and typelike were passed to suggestionList component becuase they were needed in the like button functionality*/}
    <SuggestionList suggestions={this.state.suggestions} submitlike={this.submit} typelike={this.state.type}/>
    </center>
    </div>
    )
  }
}

export default App;
