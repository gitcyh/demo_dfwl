import React from'react';
import ReactDom from 'react-dom';

import Header from './header/header.jsx';
import Lunbo from './Carousel/carousel.jsx';
import Main  from './main/main.jsx';
import Footer from './footer/footer.jsx';
import Slidebar from './slide/slidebar.jsx';

import './common/common.css'

class App extends React.Component{
    constructor(props){
      super(props)
    }

    render(){
      return (
        <div>
          <Header></Header>
          <Lunbo></Lunbo>
          <Main></Main>
          <Footer></Footer>
          <Slidebar></Slidebar>
        </div>
        )
    }
  }


  ReactDom.render(
    <App />,
    document.getElementById("app")
  )