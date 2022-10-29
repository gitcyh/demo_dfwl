import React from'react';
import ReactDom from 'react-dom';

import Logo from './logo';
import Menu from './menu';
import Toolbar from './toolbar';

import './css/header.css'

class Header extends React.Component{
    constructor(props){
      super(props)
    }

    render(){
      return (
        <div className='header'>
         <Logo></Logo>
         <Menu></Menu>
         <Toolbar></Toolbar>
        </div>
        )
    }
  }

export default Header;