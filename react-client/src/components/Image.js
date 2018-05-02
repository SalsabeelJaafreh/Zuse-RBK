import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
class Image extends Component{

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	image:""

}

this.uploadphoto=this.uploadphoto.bind(this)
this.handlesubmit=this.handlesubmit.bind(this)
this.onChange=this.onChange.bind(this)

uploadphoto(photo){
	var x=this;
	var file=photo.target.files[0]
	var fileReader=new FileReader;
   filereader.readAsDataURL(file)
   filereader.onload=function(e){
   	x.setState({
   		image:e.target.result
   	})

}
}


onChange(e){
	var states=this.state.states,
	var name=e.target.name,
	var value=e.target.value 
	states[name]=value;
	this.setState({states})
}


handlesubmit(e){
    e.preventDefault();
    axios.put(===,this.state.states)
    .then(function(response){console.log(response)})
    .catch(function(error){
				console.log(error)});

}




componentDidMount(){
	axios.get(====){
		.then(response=>{
			const myposts=response.data;
			this.setState(states:myposts);
			this.setState({image:posts.image})
			.catch(function(error){
				console.log(error)
			})
		})
	}
}





render() {
      return (
      	<div>
      	<h1><span><img id="m1" src={this.state.image}</span>
      	<form>

      	<input type="file" name=my"image" onChange={this.uploadphoto} />
      	</form>





