import React, { Component } from "react";
import Post from '../../components/Post';
import PropTypes from 'prop-types';
import CommentList from '../../components/CommentList/index';
import PostComment from '../../components/PostComment';
class SinglePost extends Component {
  state = {

  }
//display spinner when loading posts
  componentDidMount() {
    this.props.getSinglePost(this.props.match.params.id);
    console.log('this.props.match.params.id = ', this.props.match.params.id);
  }

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  onSubmit = event => {
    
  }

  render() { 
    const post = this.props.singlePost;
    return ( 
      <React.Fragment>
        {post.map((item, index) => {
          const {category, createdAt, description, title, updatedAt, username, __v, _id} = item;
          return (
            <React.Fragment>
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
              <CommentList postid={_id}/>
            </React.Fragment>
          );
        })}
        <PostComment/>
      </React.Fragment>
    );
  }
}

SinglePost.propTypes = {
  category : PropTypes.string,
  _id : PropTypes.string,
  username : PropTypes.string,
  title : PropTypes.string,
  createdAt : PropTypes.string,
  updatedAt : PropTypes.string,
/*   createdAt : PropTypes.instanceOf(Date), 
  updatedAt : PropTypes.instanceOf(Date), */
  description : PropTypes.string,
  key : PropTypes.string
}


export default SinglePost;
