import React from "react";
import { Link } from "react-router";

export default React.createClass({
  displayName: "Test",

  getInitialState () {
    return {
      count: 0
    };
  },

  render() {

    return (
      <div>
       TEST !
       <Link to="home">HOME</Link>
      </div>
    );
  },

  handleClick (){
    this.setState({
      count: this.state.count + 1
    });
  }
});