import React, { Component } from "react";
import PropTypes from 'prop-types';
import SingleComment from '../SingleComment';


class CommentList extends Component {

  componentDidMount() {
    this.props.getCommentsByPostId(this.props.postid);
    console.log(this.props.comments);
  }

  render() { 
    const comments = this.props.posts;
    return ( 
      <React.Fragment>
        {comments.map((item) => {
          return (
            <SingleComment
              commentBody={item}
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
