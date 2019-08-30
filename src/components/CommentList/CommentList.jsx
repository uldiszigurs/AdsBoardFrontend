import React, { Component } from "react";
import PropTypes from 'prop-types';
import SingleComment from '../SingleComment';
import PostComment from './PostComment';


class CommentList extends Component {
state = {
  message : ''
}
  componentDidMount() {
    this.props.getCommentsByPostId(this.props.postid);
    //console.log(this.props.comments);
  }

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  clearForm = () =>{
    this.setState({message:''});
  }

  onSubmit = event => {
    event.preventDefault();
    if (!this.state.message) {console.log('must not be null'); return};
    if (this.state.message.length < 5) {
      console.log("Must be at least 5 characters");
      return;
    }
    const dateObj = new Date();
    const createdAt= `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDay()}T${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}.${dateObj.getUTCMilliseconds()}Z`;
   // `${dateObj.getDay()}/${dateObj.getMonth()}/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
    const updatedAt = createdAt;
    this.props.addComment(this.props.user.token, this.props.user.username, this.props.postid, this.state.message, createdAt, updatedAt);
    this.clearForm();
    
  };


  render() { 
    const comments = this.props.comments;
    //HOTFIX DIRTY for unique keys
    

    return ( 
      <React.Fragment>
        {comments.map((item, index) => {
          const dateObj = new Date();
          return (
            <SingleComment key = {`${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDay()}T${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}.${dateObj.getUTCMilliseconds()}Z${index}`}
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
