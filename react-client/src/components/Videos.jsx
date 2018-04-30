//to work react
import React from 'react';
//to work in ajax
import $ from 'jquery';

//the style for the main header
const header1={
  color:'black',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'50px',
  fontFamily: 'Lobster',
  marginTop:'2px',
};
//the style for retrieve one patient
const header3={
  color:'black',
  fontWeight:'bold',
  textAlign:'centezr',
  fontSize:'25px',
  fontFamily: 'Lobster',
  marginTop:'5px',
  marginLeft: '200px',
};
//style for input retrieve one patient
const input3={
  padding: '10px 10px 10px 10px',
  marginRight: '-80px',
  marginLeft: '-30px',
  color:'black',
  fontSize:'15px',
  border: '2px solid black',
  borderRadius: '15px',
};
//the style for the button retrieve one patient
const button3={
  padding:'6px',
  backgroundColor: '#123456',
  color: 'white',
  border: '2px solid black',
  fontSize:'20px',
  borderRadius: '15px',
  fontFamily: 'Lobster',
};
//style for th / the const thing
const table={
    border: '3px solid black',
    borderCollapse: 'collapse',
    padding: '3px',
    textAlign : 'center',
    fontSize:'25px',
    fontWeight:'bold',
    color:'black',
    backgroundColor: 'white',
}
//style for td / the changed thing
const table2={
    border: '3px solid black',
    borderCollapse: 'collapse',
    padding: '3px',
    textAlign : 'center',
    fontSize:'25px',
    //fontWeight:'bold',
    color:'white',
    backgroundColor: 'gray',

}
//the style for the button logout
const button1={
  padding:'5px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  backgroundColor: '#bb280e',
  color: 'white',
  border: '2px solid #bb280e',
  marginTop:'5px',
  fontSize:'20px',
  borderRadius: '10px',
  fontFamily: 'Lobster',
};
//the style for the button create new patient
const button2={
  padding:'5px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  backgroundColor: '#123456',
  color: 'white',
  border: '2px solid #123456',
  marginTop:'0px',
  fontSize:'20px',
  borderRadius: '10px',
  fontFamily: 'Lobster',
};
//the page home what inside render
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
      videosTitle=[
      'THE 25 BEST RECYCLING HACKS EVER',
      '28 WAYS TO RECYCLE NEARLY ANYTHING AROUND YOU',
      '26 EASY WAYS TO RECYCLE ANYTHING',
      '23 GENIUS WAYS TO REUSE PLASTIC BOTTLES',
      '25 MOST AMAZING WAYS TO RECYCLE PLASTIC BOTTLES',
      '22 MOST CREATIVE WAYS TO REUSE PLASTIC BOTTLES',
      '25 MOST AMAZING WAYS TO RECYCLE PLASTIC BOTTLES',
      '22 MOST CREATIVE WAYS TO REUSE PLASTIC BOTTLES',
      '25 PLASTIC BOTTLE HACKS AND DIYs',
      '38 Ideas with Plastic Bottles',
      ],
    };
  }
  render () {
    return (
      <div1>
        <h2 style={header1}>Here you can find some idea to <br/> Recycle many thing in your home</h2>
      </div1>
    )
  }
}
//export this component to can use
export default Videos;

/*


*/









