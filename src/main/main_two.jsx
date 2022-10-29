import React from 'react';
import Voice from './voice';
import './main.css'
import MainOne from './main_one';

class MainTwo extends React.Component{
    constructor(props){
      super(props)
      this.state = {
          tabs:['编辑推荐','低年级（三年级或以下','高年级（四年级或以上）','初中及以上'],
          list:[
            {
                img:'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200925_ley7xak5xfl.jpg',
                tag:'简单',
                title:'神奇的画板'
            },
            {
                img:'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200929_ljjstzp9asc.jpg',
                tag:'简单',
                title:'发射器的密码'
            },
            {
                img:'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200911_9ppjd7xydg6.jpg',
                tag:'简单',
                title:'趣味打气球'
            },
            {
                img:'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200831_2qquh3nmog8.png',
                tag:'简单',
                title:'初代益智休闲游戏：俄罗斯方块（上集）'
            },
            {
                img:'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200925_bxz2eqa09cq.jpg',
                tag:'简单',
                title:'球球大作战'
            },
            {
                img:'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200909_999y6omn98u.jpg',
                tag:'简单',
                title:'航天器发射计划'
            },
            {
                img:'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200925_cdxn2wractu.jpg',
                tag:'简单',
                title:'扣叮音乐节'
            },
            {
                img:'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200929_ee0bgh5wel5.png',
                tag:'简单',
                title:'斐波那契数列'
            },
          ]
      }
    }

    get tabs(){
        return(
            <div className="page-home-tabs">
                <div className="eui-tabs-nav filter-tabs">
                    <div className="eui-tabs-nav-wrap">
                        {
                        this.state.tabs.map((item,index)=>{
                            return (
                                <div className={`eui-tabs-tab ${index==0 ? 'current' : ''}`} key={index}>
                                    <div className="eui-tabs-tab-link"><span className="eui-tabs-tab-label">{item}</span></div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        )
    }

    get list(){
        return (
            <ul className="card-list-wrap">
                {
                    this.state.list.map((item,index)=>{
                        return (
                            <li className="card-list-item" key={index}>
                                <div className="card-item">
                                    <div className="card-cover">
                                        <div className="imgwrap"><a href="#">
                                            <img className="card-cover-pic imgwrap-pic" src={item.img} alt=""/>
                                            <span className="card-cover-tag easy">{item.tag}</span></a></div>
                                    </div>
                                    <div className="card-meta">
                                        <p className="card-meta-title"><a href="#" className="card-meta-title-link">{item.title}</a></p>
                                        <p className="card-meta-tag"></p>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render(){
      return (
        <div className="page-home-container bg-white" id="courses">
        <div className="page-home-inner">
            <div className="page-home-panel">
                <div className="page-home-panel-hd">
                    <h2 className="page-home-panel-title">趣味课程，名师名家带你学</h2>
                    <p className="page-home-panel-title-info">学习丰富的权威认证课程</p>
                </div>
                <div className="page-home-panel-bd">
                    {this.tabs}
                    <div className="eui-tabs-nav-tabpanel active page-home-tabs-content">
                        <div className="card-list course">
                            {this.list}
                        </div>
                    </div>
                    {/* <p className="page-home-panel-ft"><a href="https://coding.qq.com/teacher-group"
                            className="page-home-panel-more" target="_blank" rel="noopener noreferrer">更多课程<i
                                className="iconhome iconhome-arrow"></i></a></p> */}
                </div>
            </div>
        </div>
    </div>
        )
    }
  }

export default MainTwo;