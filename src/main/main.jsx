import React from 'react';
import Voice from './voice';
import './main.css'
import MainOne from './main_one';
import MainTwo from './main_two';

class Main extends React.Component{
    constructor(props){
      super(props)
    }

    render(){
      return (
        <div className='page-main'>
          <Voice></Voice>
          <MainOne></MainOne>
          <MainTwo></MainTwo>
        </div>
        )
    }
  }

export default Main;