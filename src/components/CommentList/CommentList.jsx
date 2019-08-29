import React, { Component } from "react";
import PropTypes from 'prop-types';
import SingleComment from '../SingleComment';


class CommentList extends Component {

  componentDidMount() {
    this.props.getCommentsByPostId(this.props.postid);
    console.log(this.props.comments);
  }

  render() { 
    const comments = this.props.comments;
    return ( 
      <React.Fragment>
        {comments.map((item) => {
          return (
            <SingleComment key = {item._id}
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
