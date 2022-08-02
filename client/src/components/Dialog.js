import React, { Component } from 'react'

let DialogStyles = {
    width:'90%',
    height:'70%',
  
    margin:'0 auto',
    position:'fixed',
    left:'50%',
    top: '50%',
    transform:'translate(-50%, -50%)',
    zIndex:"999",
    backgroundColor:'#eee',
    padding:'10px 20px 40px',
    margin:'90px 0px',
    borderRadius: '8px',
    alignContent: 'center',
    flexDirection:'column'
}

let DialogCloseButtonStyle = {
    marginBottom:'15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius:'50%',
    border:'none',
    width:'30px',
    height:'30px',
    fontWeight:'bold',
    
};

export default class Dialog extends Component {
    render() {
        let dialog = (
            <div style={DialogStyles}>
                <button onClick={this.props.onClose}>Ok</button>
                <div style={DialogCloseButtonStyle}>
                    {this.props.children}
                </div>

            </div>
        )
        if(!this.props.isOpen){
            dialog = null;
        } 
        return (
            <div>
                {dialog}
            </div>
          
        )
    }
}
