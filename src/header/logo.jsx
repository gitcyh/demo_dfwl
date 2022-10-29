import React from'react';
import ReactDom from 'react-dom';

class Logo extends React.Component{
    constructor(props){
      super(props)
    }

    render(){
      return (
        <div className='logo'>
          <a className="logo-game" href="https://zhuimeng.qq.com/" target="_blank" rel="noopener noreferrer"></a>
          <span className="line"></span>
          <a className="logo-coding" href="/"></a>
        </div>
        )
    }
  }

export default Logo;