
import React from 'react';
import './slidebar.css';

let timer = null;
class Slidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility:'hidden',
            name:''
        }

    }

    scroll = ()=>{
        if(timer){
            return
        }
        timer = setTimeout(()=>{
            if(document.documentElement.scrollTop > 200){
                this.setState({
                    visibility:'visible',
                    name:'show'
                })
            }else{
                this.setState({
                    visibility:'hidden',
                    name:''
                })
            }
            timer = null;
        },50)
    }

    componentDidMount(){
        document.addEventListener('scroll',this.scroll)
    }
    componentWillUnmount(){
        document.removeEventListener('scroll',this.scroll)
    }
    goToTop = ()=>{
        this.setState({
            visibility:'hidden',
            name:''
        })
    }

    render() {
        return (
            <div className={`sidebar ${this.state.name}`}>
                <a href="#d" className="sidebar-guide">
                    <i className="icon-spr icon-spr-guide"></i>
                </a>
                <div className="sidebar-bd" style={{visibility:this.state.visibility}}>
                    <div className="sidebar-anchor">
                        <ul className="sidebar-anchor-list">
                            <li className="sidebar-anchor-item current">
                                <a href="#labs" className="sidebar-anchor-item-link">
                                    <i className="sidebaricon sidebaricon-labs"></i>
                                    <span  className="sidebar-anchor-item-text">实验室</span>
                                </a>
                            </li>
                            <li className="sidebar-anchor-item">
                                <a href="#courses" className="sidebar-anchor-item-link">
                                    <i className="sidebaricon sidebaricon-course"></i>
                                    <span className="sidebar-anchor-item-text">学好课</span>
                                </a>
                            </li>
                            <li className="sidebar-anchor-item" onClick={this.goToTop}>
                                <a className="sidebar-anchor-item-link" href="#">
                                    <i className="sidebaricon sidebaricon-top"></i>
                                    <span className="sidebar-anchor-item-text">回顶部</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slidebar

