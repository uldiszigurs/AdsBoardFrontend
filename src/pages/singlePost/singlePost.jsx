import React, { Component } from "react";
import Post from '../../components/Post';
import PropTypes from 'prop-types';

//TODO: Sometimes happens up to 5 rerenders WTF
class SinglePost extends Component {
//display spinner when loading posts
  componentDidMount() {
    this.props.getSinglePost(this.props.match.params.id);
    console.log('this.props.match.params.id = ', this.props.match.params.id);
  }


  render() { 
    const post = this.props.singlePost;
    return ( 
      <React.Fragment>
        {post.map((item, index) => {
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
  createdAt : PropTypes.string,
  updatedAt : PropTypes.string,
/*   createdAt : PropTypes.instanceOf(Date), 
  updatedAt : PropTypes.instanceOf(Date), */
  description : PropTypes.string,
  key : PropTypes.string
}


export default SinglePost;
