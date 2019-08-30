import React, { Component } from "react";
import Post from '../../components/Post';
import PropTypes from 'prop-types';
import CommentList from '../../components/CommentList/index';
class SinglePost extends Component {
//display spinner when loading posts
  componentDidMount() {
    this.props.getSinglePost(this.props.match.params.id);
    //console.log('this.props.match.params.id = ', this.props.match.params.id);
  }

  render() { 
    const post = this.props.singlePost;
    return ( 
      <React.Fragment>
        {post.map((item, index) => {
          const {category, createdAt, description, title, updatedAt, username, __v, _id} = item;
          const dateObj = new Date();
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
              key={`${_id}_${index}`} //HOTFIX unique props :D Dirty way, same below
              />
              <CommentList postid={_id} key = {`${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDay()}T${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}.${dateObj.getUTCMilliseconds()}Z${index}`}/>
            </React.Fragment>
          );
        })}
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
