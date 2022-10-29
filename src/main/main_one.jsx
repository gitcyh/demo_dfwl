
import React from 'react';
import Voice from './voice';
import './main.css'

class MainOne extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nav: [
                {
                    img: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200306_g9ofq50ftsdcreative.png',
                    title: '创意实验室',
                    tag1: '6+岁',
                    tag2: '创造力',
                    tag3: '图形化',
                },
                {
                    img: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200306_7h0exzofi7tpython.png',
                    title: 'Python实验室',
                    tag1: '7+岁',
                    tag2: '逻辑思维',
                    tag3: 'Python',
                },
                {
                    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAiCAYAAABBY8kOAAAEFElEQVRIia2XX0wcVRTGf3NnlyW0S11boLS1FhpLADXWKqCl0QbTmFRTNT5oYoyvuIkaEx/wyRfdN01MiL41vhijSY1SH7Q2TYWaUPoHWwoNVFppkQCtlUJhd2dmx9zZuduZ2eXf4vcyOefc+31z7px77h1tsu09lkEV8DLQCuwFtgApYBw4C/QA3wOTS9E4QtFEPC8w29HZBHwONC/3Ji56gXeiifjpAI/zFIVmzHZ0drgTVyqCO7bXnZuHUEDgEeALd4my0AWh+hpCjbXoD1YjysuwzQz2nTms8WnMS6OYQ1fByqgZn8x2dB4E2qOJ+EXlDAWUfSKh+h1EDrYiNm7wDdJ0Ha0ihqiIEX5sF5lbM6R+6sEcuqaG7HW5WnPv+0FtC5HnmmQ2HwJvZZkgcqCF0kPPoJWVLrtmckz40V1oIR1r9IZyb08f7zOBblQxAE8Dp9SIyIFmSvY/saxAIaRPnCH1S683IrP7XRXDp/eWq4aSZ4sTkZBzQw01XpfDLdx9ka0uXRB5cZ+zdEVDLvsL+xwuF5J7a8jdjNlsGmsRsWhOIjNxk+SRE2SmbiMqY5S+sh9RvWnZuOQINe7EvDCihr4kvJURbqj15bHw7a9YN6aw04bzlPZK42H/8rVKoSZliQeqfESZqX+KtsV2H1ez+kbZYPk6H7HcJ8XaIurj2iKFclvatm0fcemrbYjNG0HXnbWX9orjmq+iRMjtwg85QjNzaJvuy0X1bZWse/c1FsNScXtu3mtOyowuKysz/e+ipKuF9fdN74zzwj1PHJiXr62VP4cAV48UOpoL9g9jzyfXLCI5JJcHR6XQINDvDEgbwT5VFFLHeh0uF5J7UPWJ3GFlnB5wzphiYY5cx+gd8M52uJXQTM6taQhP5a0WemUMhO6ddckrlOve4d11iKr7ixbSNqwn/LCvlb2hhCqAFsclBCVtTxYtohDaXec1DymhN3MD6ncgYuVrF9q5LXhMhP3d+/G6RSevTklHW1/m9WyWQnuUpW+t/H+ELAv77oLXM13wXrcWAQmjbwhMS3nPAEl/Cxoec5723STmwJ+r1jH6R5j7+DDJH0963Z/h3ut+Bl6XRqqr29lw1pXraKUR52gPtHuM/mGs0XEizz+VdxWzRsaCXVverL7GrbqvgHNOJoaJefEK9kKKzO07GH+M4GfKkPrhJEbfIOnu876QPGKMwatBkXZlqG/UrsS8cDIcHssK35oh2dWNnUxnMzt1AeuvCcjYThYL3xwDw1Szz0YT8da8K7H7B7BntqOz2i33j4AG2YUXDncV/B4y+/kvjxSMAe8HHb6qiybiE9FE/Ds3w9zdtgDu9cZ8vB1NxH8Lupf6EZMNTwrKDOXuvuVWqLy8y58uFZPtSx6nKnY8jwn4DzeQgHU7MSGyAAAAAElFTkSuQmCC',
                    title: '腾讯扣叮-编程第一课',
                    tag1: '6-9岁',
                    tag2: '岁编程启蒙',
                    tag3: '计算思维',
                },
                {
                    img: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200429_ir7137irhcn48X48.png',
                    title: '3D实验室',
                    tag1: '6+岁',
                    tag2: '创造力',
                    tag3: '3D立体',
                },
                {
                    img: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200306_whgr206kz0sai.png',
                    title: '人工智能实验室',
                    tag1: '10+',
                    tag2: '前沿科技',
                    tag3: '岁走进AI',
                },
                {
                    img: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200306_g9ofq50ftsdcreative.png',
                    title: '游戏实验室',
                    tag1: '6-8岁',
                    tag2: '创意游戏',
                    tag3: '零基础',
                },
                {
                    img: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200306_otye6yv5nvart.png',
                    title: '艺术(p5)实验室',
                    tag1: '7+岁',
                    tag2: '艺术表达',
                    tag3: '数理知识',
                }
            ],
            list:[
                {
                    img:'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20210514_667b2qum87qimg1.png',
                    name:'妙趣剧情，学习不枯燥'
                },
                {
                    img:'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20210516_8hkhp06cbfq04.png',
                    name:'编程闯关，探索编程奥秘'
                },
                {
                    img:'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20210514_7xvlv329fmpimg3.png',
                    name:'知识解锁，收获丰富趣味知识'
                }
            ]

        }
    }

    get nav() {
        return (
            <ul className="labs-nav">
                {
                    this.state.nav.map((item, index) => {
                        return (
                            <li className={`labs-nav-item ${index == 2 ? 'current' : ''} `} key={index}>
                                <div className="labs-nav-item-icon" >
                                    <img className="labs-nav-item-icon-pic"
                                        src={item.img}
                                        alt="icon" />
                                </div>
                                <div className="labs-nav-item-meta">
                                    <p className="labs-nav-item-title">{item.title}</p>
                                    <p className="labs-nav-item-info"><span
                                        className="labs-nav-item-info-tag">{item.tag1}</span><span
                                            className="labs-nav-item-info-tag">{item.tag2}</span><span
                                                className="labs-nav-item-info-tag">{item.tag3}</span></p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    get list(){
        return (
            <ul className="labs-example-list">
            {
                this.state.list.map((item,index)=>{
                    return (
                        <li className="labs-example-item" key={index}>
                            <div className="imgwrap"><img className="labs-example-item-pic imgwrap-pic"
                                src={item.img}
                                alt="" /></div>
                            <p className="labs-example-item-name">{item.name}</p>
                        </li>
                    )
                })
            }
            
        </ul>
        )
    }

    render() {
        return (
            <div className="page-home-container " id="labs">
                <div className="page-home-inner">
                    <div className="page-home-panel">
                        <div className="page-home-panel-hd">
                            <h2 className="page-home-panel-title">编程好工具，学习更轻松</h2>
                            <p className="page-home-panel-title-info">选择适合你的编程神器</p>
                        </div>
                        <div className="page-home-panel-bd">
                            <div className="labs">
                                <div className="labs-aside">
                                    <div className="labs-aside-wrap">
                                        {this.nav}
                                    </div>
                                    <div className="labs-aside-more">
                                        <a href="#" className="labs-aside-more-btn">
                                            <i className="iconhome iconhome-more"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="labs-main">
                                    <div className="labs-main-content xgame-labs">
                                        <div className="labs-intro">
                                            <div className="labs-intro-figure">
                                                <p className="labs-intro-figure-info"><i className="iconhome iconhome-flag"></i>专为6-9岁孩子定制的编程启蒙App</p>
                                                <p className="labs-intro-figure-title">腾讯扣叮-编程第一课</p>
                                                <p className="labs-intro-figure-description">
                                                    腾讯自研的游戏化编程启蒙APP，作为孩子的“编程第一课”，通过趣味的积木编程闯关，让孩子学习编程更简单、更有趣、更高效。</p>
                                                <div className="labs-intro-figure-ctrl">
                                                    <div className="labs-intro-figure-ctrl-btn">
                                                        {/* <div className="xgame-labs-popover"><img className="xgame-labs-popover-pic"
                                                            src="https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20210514_jwiemj3etneqrcode.png"
                                                            alt="" />
                                                            <p className="xgame-labs-popover-text">扫码下载，立即体验</p>
                                                        </div> */}
                                                        <i className="xgame-labs-qrcode-icon"></i>立即体验
                                                    </div>
                                                    <a href="/xgame-pc-home" className="labs-intro-figure-ctrl-link" target="_blank" rel="noopener noreferrer">了解更多
                                                        <i className="iconhome iconhome-arrow"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="labs-intro-cover">
                                                <div id="T_-zhadKJ" className="video-player-wrapper"><video id="course-video" className="video-player-enter"
                                                    src="https://wuji-30130.sz.gfp.tencent-cloud.com/20210516_rfqbytd62t.MP4" autoPlay
                                                    playsInline="" webkit-playsinline="true" mtt-playsinline="true" loop muted
                                                ></video></div>
                                            </div>
                                        </div>
                                        <div className="labs-example">
                                            <div className="labs-example-hd">
                                                <h3 className="labs-example-hd-title">应用截图</h3>
                                            </div>
                                            <div className="labs-example-bd">
                                                {this.list}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainOne;


