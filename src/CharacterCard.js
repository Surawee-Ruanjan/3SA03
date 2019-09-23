import React, { Component } from 'react';

class CharacterCard extends Component {
    
    state = {
        active: false,
    }
   
    activate = () => {
        this.setState({
            active: !this.state.active
        });

        this.props.activationHandler(this.props.value);
    }
    
    render(){
        let className = `card ${this.state.active ? 'activeCard': ''}`
            return (
                <div className={className} onClick={this.activate}>
                    {this.props.value}
                </div>
            )
        }
    }
       

export default CharacterCard;