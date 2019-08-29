import React, { Component } from "react";
import PropTypes from 'prop-types';
import SingleComment from '../SingleComment';


class CommentList extends Component {

  componentDidMount() {
    this.props.getAllCommentsByPostId(this.props.postid);
    console.log(this.props.posts);
  }

  render() { 
    const posts = this.props.posts;
    return ( 
      <React.Fragment>
        {posts.map((item, index) => {
          const {SOMETHINGHERE} = item;
          return (
            <SingleComment

            />
          );
        }) }
      </React.Fragment>
    );
  }
}

CommentList.propTypes = {
  postid : PropTypes.string,
}


export default CommentList;
