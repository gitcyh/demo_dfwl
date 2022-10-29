import React from 'react';
import ReactDom from 'react-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul className="menu">
        <li className="menu-item current"><a href="/" className="item-link">首页</a></li>
        <li className="menu-item"><a href="/labs" className="item-link">实验室</a></li>
        <li className="menu-item"><a href="/lesson" className="item-link">课程</a></li>
        <li className="menu-item"><a href="/teacher-group" className="item-link">名师团</a></li>
        <li className="menu-item"><a href="/campus" className="item-link">校园</a></li>
        <li className="menu-item"><a href="/community" className="item-link">社区</a></li>
        <li className="menu-item"><a href="/zhuimengying-2022/" className="item-link">追梦营</a></li>
        <li className="menu-item"><a href="/coding-day" className="item-link">CodingDay</a></li>
        <li className="menu-item"><a href="/noc-2022/" className="item-link">赛事活动</a></li></ul>
    )
  }
}

export default Menu;