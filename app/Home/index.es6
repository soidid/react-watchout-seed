import React from "react";

export default React.createClass({
  displayName: "Home",

  getInitialState () {
    return {
      count: 0
    };
  },

  render() {
    var img = require("./test.png");
    return (
      <div>
        xoxo
        <img src={img} />
        <div onClick={this.handleClick}>
          Click: {this.state.count}
        </div>
      </div>
    );
  },

  handleClick (){
    this.setState({
      count: this.state.count + 1
    });
  }
});