import React, { Component } from 'react';   

class CardParticipant extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src= {"https://robohash.org/" + this.props.name + "?size=200x200"} alt="someRobo"/>
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.username}</p>
                    <p>{this.props.email}</p>
                </div>
            </div>
         );
    }
}
 
export default CardParticipant;