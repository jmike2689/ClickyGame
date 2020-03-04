import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highScore: 0
  };
  
  gameReset = () =>{}
  

 clickCount = id => {
   this.state.friends.find((o, i) => {
     if (o.id === id) {
       if (friends[i].count === 0) {
         friends[i].count = friends[i].count + 1;
         this.setState({ score: this.state.score + 1 }, function () {
           console.log(this.state.score);
         });
         this.state.friends.sort(() => Math.random() - 0.5)
         return true;
       } else {
         this.gameReset();
       }
     }
   });
 }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Memory Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard id={friend.id} image={friend.image} />
        ))}
      </Wrapper>
    );
  }
}

export default App;
