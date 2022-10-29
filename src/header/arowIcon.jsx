import Icon from '@ant-design/icons';
import React from 'react';


const style = {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '6px 4px 0 4px',
    borderColor: '#fff transparent transparent transparent',
    display: 'inline-block',
    content: '',
    marginLeft: '6px',
    transition: 'all 200ms',
    verticalAlign: '2px',
}
const arrow = () => (
  <span className='arrow' style={style}></span>
);
const arrowIcon = (props) => <Icon component={arrow} {...props} />;


export default arrowIcon;