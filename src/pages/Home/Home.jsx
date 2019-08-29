import React, { Component } from "react";
import Post from '../../components/Post';
import PropTypes from 'prop-types';

class Home extends Component {
  componentDidMount() {
    this.props.getUserPosts(this.props.user.token, this.props.user.username);
    console.log(this.props.userPosts);
  }

  render() { 
    const userPosts = this.props.userPosts; //FIXME: CAREFUL
    return ( // DRY : whole render code block could be another component, currently used in two pages
      <React.Fragment>
        {userPosts.map((item) => {
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
Home.propTypes = {
  category : PropTypes.string,
  _id : PropTypes.string,
  username : PropTypes.string,
  title : PropTypes.string,
  createdAt : PropTypes.instanceOf(Date), 
  updatedAt : PropTypes.instanceOf(Date),
  description : PropTypes.string,
  key : PropTypes.string
}


export default Home;