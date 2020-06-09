import React from 'react';
import './LikeButton.css';

class LikeButton extends React.Component{
  constructor(){
    super();

    this.state = {
      likes: 100,
      increase: true,
      active: false
    }

    this.increaseOrDecrease = this.increaseOrDecrease.bind(this);
  }

  increaseOrDecrease() {
    if(this.state.increase){
        this.setState({likes: this.state.likes + 1,
                       increase: false,
                       active: true
        });
    }
    else{
        this.setState({likes: this.state.likes - 1,
                       increase: true,
                       active: false
      });

    }
  }

  render(){
    return(
      <div className="App">
        <h1>Like Button</h1>
        <button onClick={this.increaseOrDecrease} 
                className={this.state.active ? 'activeButton': 'likeButton'}>
          Likes | {this.state.likes}
        </button>
      </div>
    )
  }
}

export default LikeButton;