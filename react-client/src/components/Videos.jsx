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
};
//the style for the title
const title={
  color:'#149c82',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'25px',
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
};
//the style for the video
const video={
  color:'black',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'25px',
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
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
      'https://www.youtube.com/embed/3ETqGos67wQ?autoplay=1&mute=1',
      'https://www.youtube.com/embed/YCiN3aAaIC0?autoplay=1&mute=1',
      'https://www.youtube.com/embed/njkg80wZZIM?autoplay=1&mute=1',
      'https://www.youtube.com/embed/AVYOASw03sY?autoplay=1&mute=1',
      'https://www.youtube.com/embed/LgSBMKlWtVE?autoplay=1&mute=1',
      'https://www.youtube.com/embed/nN5DG309oYc?autoplay=1&mute=1',
      'https://www.youtube.com/embed/La3EWG5r5rQ?autoplay=1&mute=1',
      'https://www.youtube.com/embed/xEAOvFG1AmM?autoplay=1&mute=1',
      ],
      videosTitle:[
      'THE 25 BEST RECYCLING HACKS EVER',
      '28 WAYS TO RECYCLE NEARLY ANYTHING AROUND YOU',
      '26 EASY WAYS TO RECYCLE ANYTHING',
      '23 GENIUS WAYS TO REUSE PLASTIC BOTTLES',
      '25 MOST AMAZING WAYS TO RECYCLE PLASTIC BOTTLES',
      '22 MOST CREATIVE WAYS TO REUSE PLASTIC BOTTLES',
      '25 PLASTIC BOTTLE HACKS AND DIYs',
      '38 IDEAS WITH PLASTIC BOTTLES',
      ],
    };
  };
  render () {
    return (
      <div1 >
        <h2 style={header}>Here you can find some idea to
          <br/> Recycle many thing in your home</h2>
        {this.state.videosTitle.map((videoTitle, index)=>{
          return<div2>
                  <div3 align='right'>
                    <h style={title} key={index}>{videoTitle}</h>
                    <br/>
                    <iframe style={video} width="400" height="400" src={this.state.videosLink[index]}/>
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
