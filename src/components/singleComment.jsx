import React from 'react';

const SingleComment = (props) => {
    const {username, message, createdAt, updatedAt} = props;
    return (
        <div>
            <div>Comment : {message}</div>
            <div>By : {username}</div>
            <div>Created at : {createdAt}</div>
            {(!updatedAt === createdAt) ? <div>Last updated : {createdAt}</div> : null} {/* IF post hasnt been updated, don't show updated at */}
        </div>
    );
};

export default SingleComment;


