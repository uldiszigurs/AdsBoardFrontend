import React, { Component } from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class CategoryIndex extends Component {

  componentDidMount() {
    this.props.getCategoryList();
  }

  render() { 
    const categoryList = this.props.match.params.category
    return ( 
      <React.Fragment>
        {/* TODO: Alphabetical order or smthing to navigate faster */}
        {
          categoryList.map((item) => {
            return (
              <Link to = {`/category/${item}`}>{item}</Link>
            );
          })
        }
      </React.Fragment>
    );
  }
}
CategoryIndex.propTypes = {
  categoryPosts: PropTypes.array,
}


export default CategoryIndex;