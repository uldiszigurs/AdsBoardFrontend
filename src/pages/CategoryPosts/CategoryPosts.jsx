import React, { Component } from "react";
import Post from '../../components/Post';
import PropTypes from 'prop-types';
import SingleFormComponent from '../../components/SingleFormComponent';

class CategoryPosts extends Component {
  state = {
    category : this.props.match.params.category
  }

  componentDidMount() {
    console.log (this.props);
    this.props.changeCategoryState(this.props.match.params.category);
    this.props.getCategoryPosts(this.props.token, this.props.match.params.category);
    console.log('this.props.match.params.category = ',this.props.match.params.category);
  }
  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    if (!this.state.category) { //additional check to not look for property in category if category is null.
      if (this.state.category.length < 1) {
        console.log("Must be not null");
        return;
      }
    }
    this.props.changeCategoryState(this.state.category || this.props.match.params.category);
    this.props.getCategoryPosts(this.props.token, this.state.category);
  }

  render() { 
    const categoryPosts = this.props.categoryPosts;
    const category = this.props.match.params.category
    console.log('CATEGORY = ',category);
    return ( 
      <React.Fragment>
        <SingleFormComponent inputName = {'category'} onChange = {this.onChange} onSubmit = {this.onSubmit}/>
        {(categoryPosts.length) ? 
          categoryPosts.map((item) => {
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
        }) : null}
        {
          category ? <p>Sorry, there are no posts with this category name</p> : null
        }
    </React.Fragment>
    );
  }
}
CategoryPosts.propTypes = {
  token: PropTypes.string,
  categoryPosts: PropTypes.array,
  category: PropTypes.string
}


export default CategoryPosts;