import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Post from '../../components/Post';
class Posts extends Component {
//display spinner when loading posts
  state = {

  };
  componentDidMount() {
    //this.props.getAllPosts();
  }
  render() { 
    return (
      <div>SOME POSTS HERE!</div>

    );
  }
}

export default Posts;
