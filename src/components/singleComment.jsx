import React from 'react';
import PropTypes from 'prop-types';

const SingleComment = (props) => {
    //console.log('PROPS = ', props);
    const {_id, postid, username, message, createdAt, updatedAt} = props.commentBody;
    return (
        <div key = {_id} className = ''>
            <div>Comment : {message}</div>
            <div>By : {username}</div>
            <div>Created at : {createdAt}</div>
            {(!updatedAt === createdAt) ? <div>Last updated : {createdAt}</div> : null} {/* IF post hasnt been updated, don't show updated at */}
        </div>
    );
};

SingleComment.propTypes = {
    id_ : PropTypes.string,
    postid : PropTypes.string,
    username : PropTypes.string,
    message : PropTypes.string,
    createdAt : PropTypes.string,
    updatedAt : PropTypes.string
}
export default SingleComment;


