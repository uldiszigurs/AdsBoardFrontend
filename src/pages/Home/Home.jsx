import React, { Component } from "react";
import Post from '../../components/Post';
class Home extends Component {
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


export default Home;