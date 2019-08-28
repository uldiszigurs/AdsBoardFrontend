import React, { Component } from "react";
import Post from '../../components/Post';
import PropTypes from 'prop-types';


class SinglePost extends Component {
//display spinner when loading posts
  componentDidMount() {
    this.props.getSinglePost(this.props._id);
    if (this.props._id) {
      console.log('THIS.PROPS._ID is falsy');
      //throw new Error('THIS.PROPS._ID is falsy');
    }
    console.log(this.props.singlePost);
  }


  render() { 
    const posts = this.props.posts;
    return ( 
      <React.Fragment>
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

SinglePost.propTypes = {
  category : PropTypes.string,
  _id : PropTypes.string,
  username : PropTypes.string,
  title : PropTypes.string,
  createdAt : PropTypes.instanceOf(Date), 
  updatedAt : PropTypes.instanceOf(Date),
  description : PropTypes.string,
  key : PropTypes.string
}


export default SinglePost;
