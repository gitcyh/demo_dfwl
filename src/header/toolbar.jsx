import React from'react';
import ReactDom from 'react-dom';
import { Button, Dropdown,Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ArrowIcon from './arowIcon'

class Toolbar extends React.Component{
    constructor(props){
      super(props)
    }


    get menu(){
      return (
        <Menu
          items={[
            {
              key: '1',
              label: (
                <a href="/creative-lab/" target="_blank" rel="noopener noreferrer" className="ec-header-dropdown-item-link"><i className="ec-header-icon  ec-header-icon-creative-ide"></i>创意实验室</a>
              ),
            },
            {
              key: '2',
              label: (
                <a href="/python-lab-launcher/" target="_blank" rel="noopener noreferrer" className="ec-header-dropdown-item-link"><i className="ec-header-icon  ec-header-icon-python-ide"></i>Python实验室</a>
              ),
            },
            {
              key: '3',
              label: (
                <a href="/3d-lab/" target="_blank" rel="noopener noreferrer" className="ec-header-dropdown-item-link"><i className="ec-header-icon  ec-header-icon-3d"></i>3D实验室</a>
              ),
            },
            {
              key: '4',
              label: (
                <a href="/ai-lab/" target="_blank" rel="noopener noreferrer" className="ec-header-dropdown-item-link"><i className="ec-header-icon  ec-header-icon-ai-ide"></i>人工智能实验室</a>
              ),
            },
            {
              key: '5',
              label: (
                <a href="/jump/" target="_blank" rel="noopener noreferrer" className="ec-header-dropdown-item-link"><i className="ec-header-icon  ec-header-icon-game-ide"></i>游戏实验室</a>
              ),
            },
            {
              key: '6',
              label: (
                <a href="/p5-lab/" target="_blank" rel="noopener noreferrer" className="ec-header-dropdown-item-link"><i className="ec-header-icon  ec-header-icon-p5-ide"></i>艺术(p5)实验室</a>
              ),
            },
            {
              key: '7',
              label: (
                <a href="/hardware-lab/" target="_blank" rel="noopener noreferrer" className="ec-header-dropdown-item-link"><i className="ec-header-icon  ec-header-icon-hardware-ide"></i>硬件实验室</a>
              ),
            },
            {
              key: '8',
              label: (
                <a href="/js-lab/" target="_blank" rel="noopener noreferrer" className="ec-header-dropdown-item-link"><i className="ec-header-icon  ec-header-icon-js-ide"></i>JS实验室</a>
              ),
            },
          ]}
        />
      );
    }

    render(){
      return (
        <div className="toolbar">
          <Dropdown overlay={this.menu} placement="bottomLeft">
            <Button type="primary" shape="round" className='cz-btn'>立即创作<ArrowIcon/></Button>
          </Dropdown>
             <div className="toolbar-login">登录</div>
        </div>
        )
    }
  }

export default Toolbar;