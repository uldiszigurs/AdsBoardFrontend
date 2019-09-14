import React, { Component } from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class CategoryIndex extends Component {

  componentDidMount() {
    this.props.getCategoryList();
  }

  render() { 
    const categoryList = this.props.categoryList;

    return ( 
      <React.Fragment>
        {/* TODO: Alphabetical order or smthing to navigate faster */}
        {
          categoryList.map((category) => {
            return (
              <div className = 'm-2 border border-warning' key = {category}>
                <Link to = {`/category/${category}`} >{category}</Link>
              </div>
            );
          })
        }
      </React.Fragment>
    );
  }
}
CategoryIndex.propTypes = {
  categoryList: PropTypes.array,
}


export default CategoryIndex;