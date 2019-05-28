import React, { Component } from 'react';
import Card from '../Card/Card';

class CardList extends Component {
    
    state = {  
    }
    
    render() { 
        return (  
            <div>
                {this.props.elements.map((robot, index) =>{
                    return <Card 
                    key={index}
                    id={robot.id} 
                    name={robot.name} 
                    username={robot.username} 
                    email={robot.email}
                    />
                })}
            </div>
        );
    }
}
 
export default CardList;