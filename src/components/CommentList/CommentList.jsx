import React, { Component } from "react";
import PropTypes from 'prop-types';
import SingleComment from '../SingleComment';
import PostComment from './PostComment';


class CommentList extends Component {

  componentDidMount() {
    this.props.getCommentsByPostId(this.props.postid);
    console.log(this.props.comments);
  }

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.message.length < 5) {
      console.log("Must be at least 5 characters");
      return;
    }

    this.props.addComment(this.props.user.token, this.props.user.username, this.props.postid, this.state.message);
    console.log('this.state = ', this.state);
  };

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
        <PostComment onChange={this.onChange} onSubmit={this.onSubmit}/>
      </React.Fragment>

    );
  }
}

CommentList.propTypes = {
  postid : PropTypes.string,
}


export default CommentList;
