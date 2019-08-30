import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Post from '../../components/Post';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


class Posts extends Component {
//display spinner when loading posts
  componentDidMount() {
    this.props.getAllPosts();
    //console.log(this.props.posts);
  }

//TODO: LINK TO INDIVIDUAL POST.
  render() { 
    const posts = this.props.posts;
    return ( 
      <React.Fragment>
        <h4>Here you can see all posts from all users!</h4>
        {posts.map((item, index) => {
          const {category, createdAt, description, title, updatedAt, username, __v, _id} = item;
          return (
            <Post 
            category={category} 
            createdAt={createdAt}
            description={description}
            title={title}
            updatedAt={updatedAt}
            username={username}
            __v={__v}
            _id={_id}
            key={_id}
            />
          );
        }) }
      </React.Fragment>
    );
  }
}

Posts.propTypes = {
  category : PropTypes.string,
  _id : PropTypes.string,
  username : PropTypes.string,
  title : PropTypes.string,
  createdAt : PropTypes.instanceOf(Date), 
  updatedAt : PropTypes.instanceOf(Date),
  description : PropTypes.string,
  key : PropTypes.string
}


export default Posts;
