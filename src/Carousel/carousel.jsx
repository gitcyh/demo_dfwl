import React from'react';
import ReactDom from 'react-dom';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './Carousel.css';


const contentStyle = {
  height: '480px',
  width: '100%',
  color: '#fff',
  lineHeight: '480px',
  textAlign: 'center',
  background: '#364d79',
};
const carouselStyle = {
 'marginLeft':'80px',
 'marginRight':'80px'
}



class Lunbo extends React.Component{
    constructor(props){
      super(props);
      this.carousel = React.createRef();
      this.state = {
        currentIndex:0,
      }
    }

    handlePrev = ()=>{
        this.carousel.current.prev();
    }

    handleNext = ()=>{
        this.carousel.current.next();
    }
    goTo = (slideNumber, dontAnimate)=>{
        this.carousel.current.goTo(slideNumber, dontAnimate);
    }

    //切换后的回调改变样式
    afterChange = (current)=>{
        this.setState({
            currentIndex:current
        })
    }

    render(){
      return (
        <div className='carousel-wrap'>
            <Carousel autoplay effect="fade" style={carouselStyle} ref={this.carousel} afterChange={this.afterChange}>
                <div>
                    <img style={contentStyle}  className="slide-imgwrap-pic" src="https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20220909_2huzgbj4onv.png" alt="cover"/>
                </div>
                <div>
                    <img style={contentStyle} className="slide-imgwrap-pic" src="https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20221017_i1n62bthmuobanner.png" alt="cover" />
                </div>
                <div>
                    <img style={contentStyle} className="slide-imgwrap-pic" src="https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20220901_rz0z7qqh2gtgebanner.jpg" alt="cover"/>
                </div>
                <div>
                    <img style={contentStyle} className="slide-imgwrap-pic" src="https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20220909_9e0choci7rg_20220909101245.jpg" alt="cover"/>
                </div>
                <div>
                    <img style={contentStyle} className="slide-imgwrap-pic" src="https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20211230_u9kh06gxj4a79e15a997c42203c515773168a900f9.jpg" alt="cover"/>
                </div>
           </Carousel>
           <div className="slide-nav">
               <a href="#" className="slide-nav-btn prev"  onClick={this.handlePrev}><i className="iconhome iconhome-arrow"></i></a>
               <ul className="slide-nav-list">
                   <li className={`slide-nav-item ${0==this.state.currentIndex ? 'current' : ''} `} onClick={()=>this.goTo(0,100)}><a href="#" className="slide-nav-item-link">第四届追梦营</a></li>
                   <li className={`slide-nav-item ${1==this.state.currentIndex ? 'current' : ''} `} onClick={()=>this.goTo(1,100)}><a href="#" className="slide-nav-item-link">深圳创客节创意编程赛</a></li>
                   <li className={`slide-nav-item ${2==this.state.currentIndex ? 'current' : ''} `} onClick={()=>this.goTo(2,100)}><a href="#" className="slide-nav-item-link">深圳TGE虚拟机器人挑战赛</a></li>
                   <li className={`slide-nav-item ${3==this.state.currentIndex ? 'current' : ''} `}  onClick={()=>this.goTo(3,100)}><a href="#" className="slide-nav-item-link">编程与人工智能活动</a></li>
                   <li className={`slide-nav-item ${4==this.state.currentIndex ? 'current' : ''} `} onClick={()=>this.goTo(4,100)}><a href="#" className="slide-nav-item-link">腾讯游戏年度故事片</a></li>
                </ul>
                <a href="#" className="slide-nav-btn next" onClick={this.handleNext}><i className="iconhome iconhome-arrow"></i></a>
            </div>
        </div>
        
        )
    }
  }

export default Lunbo;