import React from 'react';
import PropTypes from 'prop-types';

const SingleComment = (props) => {
    const {_id, postid, username, message, createdAt, updatedAt} = props;
    return (
        <div key = {_id}>
            <div>Comment : {message}</div>
            <div>By : {username}</div>
            <div>Created at : {createdAt}</div>
            {(!updatedAt === createdAt) ? <div>Last updated : {createdAt}</div> : null} {/* IF post hasnt been updated, don't show updated at */}
        </div>
    );
};
/* e.g.
"_id": "5d67c5b018651222786dfd25",
"postid": "5d66f2eb46187908d8a16407",
"username": "IAmAnotherPersonWhoWantsToBuy",
"message": "Nice post, I want to buy it!",
"createdAt": "2019-08-29T12:31:44.033Z",
"updatedAt": "2019-08-29T12:31:44.033Z",
"__v": 0
*/
SingleComment.propTypes = {
    id_ : PropTypes.string,
    postid : PropTypes.string,
    username : PropTypes.string,
    message : PropTypes.string,
    createdAt : PropTypes.string,
    updatedAt : PropTypes.string
}
export default SingleComment;


