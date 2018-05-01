//to work react
import React from 'react';
//to work in ajax
import $ from 'jquery';
//the style for the header
const header={
  color:'black',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'50px',
  fontFamily: 'Lobster',
};
//the style for the title
const title={
  color:'red',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'25px',
};
//the style for the video
const video={
  color:'black',
  fontWeight:'bold',
  textAlign:'centezr',
  fontSize:'25px',
  fontFamily: 'Lobster',
  marginTop:'5px',
  marginLeft: '200px',
};
//style for the div
const div={
  padding: '10px 10px 10px 10px',
  marginRight: '-80px',
  marginLeft: '-30px',
  color:'black',
  fontSize:'15px',
  border: '2px solid black',
  borderRadius: '15px',
};
//the page vidoes what inside render
class Videos extends React.Component {
  constructor(){
    super();
    //all the videos title and link
    this.state={
      videosLink:[
      'https://www.youtube.com/watch?v=3ETqGos67wQ',
      'https://www.youtube.com/watch?v=YCiN3aAaIC0',
      'https://www.youtube.com/watch?v=njkg80wZZIM',
      'https://www.youtube.com/watch?v=AVYOASw03sY',
      'https://www.youtube.com/watch?v=LgSBMKlWtVE',
      'https://www.youtube.com/watch?v=nN5DG309oYc',
      'https://www.youtube.com/watch?v=LgSBMKlWtVE',
      'https://www.youtube.com/watch?v=nN5DG309oYc',
      'https://www.youtube.com/watch?v=La3EWG5r5rQ',
      'https://www.youtube.com/watch?v=xEAOvFG1AmM',
      ],
      videosTitle:[
      'THE 25 BEST RECYCLING HACKS EVER',
      '28 WAYS TO RECYCLE NEARLY ANYTHING AROUND YOU',
      '26 EASY WAYS TO RECYCLE ANYTHING',
      '23 GENIUS WAYS TO REUSE PLASTIC BOTTLES',
      '25 MOST AMAZING WAYS TO RECYCLE PLASTIC BOTTLES',
      '22 MOST CREATIVE WAYS TO REUSE PLASTIC BOTTLES',
      '25 MOST AMAZING WAYS TO RECYCLE PLASTIC BOTTLES',
      '22 MOST CREATIVE WAYS TO REUSE PLASTIC BOTTLES',
      '25 PLASTIC BOTTLE HACKS AND DIYs',
      '38 IDEAS WITH PLASTIC BOTTLES',
      ],
    };
  };
  //function to render the videos
  showVidoes() {
    var that=this
    // for (var i = 0; i < that.state.videosLink.length; i++) {
      console.log("that.state.videosLink")
    // }
    //$('.geneticDisease').html(data.genetic_Diseases);
  };
  //call showVidoes automaticlly
  render () {
    return (
      <div1 >
        <h2 style={header}>Here you can find some idea to 
        <br/> Recycle many thing in your home</h2>
          {this.state.videosTitle.map((videoTitle, index)=>{ 
            return<div2>
                    <div3 align='right'>
                      <h style={title} key={index}>{videoTitle} </h>
                      <br/> 
                      <video style={title} width="320" height="240" controls>
                        <source src={this.state.videosLink[0]}/>
                        Your browser does not support the video tag.
                      </video>
                    </div3>
                    <br/>
                  </div2>

          })}
     
      </div1>
    )
  }
}
//export this component to can use
export default Videos;

/*
        {this.state.videosLink.map(videosLink => <h> {this.state.videosLink}</h>)}



  


*/









