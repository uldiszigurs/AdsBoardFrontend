import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import CommentList from './CommentList';

class postWithComments extends Component {
    componentDidMount () {
        //make request for FullPostList here
    }
     
    render() {
        const fakeProps = {
            "postid" : "5d668f328b0aa91d14eadbff",
            //TODO: ALL BODIES ARE ARRAYS!
            "postBody" : [{
                "_id": "5d668f328b0aa91d14eadbff",
                "category": "cars",
                "username": "TestUser",
                "title": "Selling car",
                "description": "test",
                "createdAt": "2019-08-28T14:26:58.470Z",
                "updatedAt": "2019-08-28T14:26:58.470Z"
                }],

            "commentList" : [{ // ARRAY!
            "_id": "5d668f0a8b0aa91d14eadbfe",
            "username": "IAmAnotherPersonWhoWantsToBuy",
            "message": "Nice post, I want to buy it!",
            "createdAt": "2019-08-28T14:26:18.102Z",
            "updatedAt": "2019-08-28T14:26:18.102Z"
                }],
        
            "mediaBody" : [{ // ARRAY!
            "_id": "5d668f328b0aa91d14eadbff",
            "username": "IAmAnotherPersonWhoWantsToBuy",
                }] 
            }
        const {postid, commentList, postBody, mediaBody } = fakeProps;
        //category, id, username, title, description, createdAt, updatedAt
        const PostProps = {}
        return (
            <React.Fragment>
                <Post postid={postid} postBody={postBody}/> 
                <CommentList postid={postid} commentList={commentList}/>
            </React.Fragment>
            
        );
    }
}

export default postWithComments;

/* 
FullPostList = [ //ONE ITEM
    {"postid" : "5d668f328b0aa91d14eadbff",

    "comment" : {
    "_id": "5d668f0a8b0aa91d14eadbfe",
    "username": "IAmAnotherPersonWhoWantsToBuy",
    "message": "Nice post, I want to buy it!",
    "createdAt": "2019-08-28T14:26:18.102Z",
    "updatedAt": "2019-08-28T14:26:18.102Z"},

    "postBody" : {
    "_id": "5d668f328b0aa91d14eadbff",
    "username": "TestUser",
    "title": "Selling car",
    "description": "test",
    "createdAt": "2019-08-28T14:26:58.470Z",
    "updatedAt": "2019-08-28T14:26:58.470Z"}
    
    "mediaBody" : { //TODO: validate this
    "_id": "5d668f328b0aa91d14eadbff",
    "username": "IAmAnotherPersonWhoWantsToBuy",
    
    }
}
    
]
*/