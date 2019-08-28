import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import CommentList from './CommentList';



class postWithComments extends Component {
    render() {
        return (
            <React.Fragment>
                <Post/> 
                <CommentList/>
            </React.Fragment>
            
        );
    }
}

export default postWithComments;