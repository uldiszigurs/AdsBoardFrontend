import React, { Component } from "react";
import Post from '../../components/Post';
import PropTypes from 'prop-types';
import CategoryPostsForm from '../../components/CategoryPostsForm';

class CategoryPosts extends Component {
  state = {
    category : ""
  }
  componentDidMount() {
    if (this.state.category) {this.props.getCategoryPosts(this.props.user.token, this.props.match.params.category);}
    console.log(this.props.categoryPosts);
    console.log('TOKEN = ',this.props.user.token);
  }
  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.category.length < 1) {
      console.log("Must be not null!");
      return;
    }
    this.props.getCategoryPosts(this.props.user.token, this.state.category);
  }

  render() { 
    const categoryPosts = this.props.categoryPosts; //FIXME: CAREFUL
    console.log(categoryPosts);
    console.log(this.props);
    return ( 
      <React.Fragment>
      <CategoryPostsForm onChange = {this.props.onChange} onSubmit = {this.props.onSubmit}/>
      {categoryPosts.map((item) => {
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
CategoryPosts.propTypes = {
  category : PropTypes.string,
  _id : PropTypes.string,
  username : PropTypes.string,
  title : PropTypes.string,
  createdAt : PropTypes.string,
  updatedAt : PropTypes.string,
  description : PropTypes.string,
  key : PropTypes.string
}


export default CategoryPosts;