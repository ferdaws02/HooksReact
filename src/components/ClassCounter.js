import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props);
    
        this.state={
        count:0
    }
}
incrementCount=()=>{
    this.setState({
        count: this.state.count +1
    })
}
    render() {
        return (
            <div>
              <button onClick={this.incrementCount}>Count{this.state.count}</button>  
            </div>
        );
    }
}

export default ClassCounter;
/*
to make our counter we need 3 steps
1- create a class component
2-create a state variable and initialise it to 0
3-create a function incrementCount: that is capable to set the state value
*/