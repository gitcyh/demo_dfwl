import React from'react';

class Voice extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          text:['2021腾讯追梦营嘉年华圆满落幕','立项四年，腾讯互娱如何做编程教育','腾讯编程课进村，这是孩子们创作的“APP”'],
          currentText:'2021腾讯追梦营嘉年华圆满落幕'
      }
    }

    componentDidMount(){
        let i = 0;
        setInterval(()=>{
            this.setState({
                currentText:this.state.text[i++]
            })
            if(i == this.state.text.length){
                i = 0;
            }
        },3000)
    }

    render(){
      return (
        <div className="notice">
            <i className="icon-spr icon-spr-notice"></i>
            <p className="notice-text">{this.state.currentText}</p>
            <i className="notice-tag hot">Hot</i>
        </div>
        )
    }
  }

export default Voice;