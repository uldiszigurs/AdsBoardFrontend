import React from 'react';
import PropTypes from 'prop-types';
import image from '../image/testImage.jpeg';
import { Link } from "react-router-dom";

const Post = (props) => {
    const {category, _id, username, title, description, createdAt, updatedAt} = props;
    //console.log('category, id, username, title, description, createdAt, updatedAt',category, _id, username, title, description, createdAt, updatedAt);
    return (
        <div className = 'container border border-success' key = {_id}>
            <div className="row m-2">
                <div className = 'col'>
                    <img alt='something went wrong' src={image}/>
                </div>
                <div className = 'col'>
                    <div className = 'p-2'><Link to = {`/post/${_id}`}>{title}</Link></div>
                    <div className = 'p-2'>Posted by user : {username}</div>
                    <div className = 'p-2'>Description : {description}</div>
                    <div className = 'p-2'>Category : {category}</div>
                    {/* <div className = 'p-2'>{createdAt}</div>
                    <div className = 'p-2'>{updatedAt}</div> */}
                </div>
            </div>
            
            
            
        </div>
    );
};
Post.propTypes = {
    category : PropTypes.string,
    id : PropTypes.string,
    username : PropTypes.string,
    title : PropTypes.string,
    createdAt : PropTypes.string,
    updatedAt : PropTypes.string,
/*     createdAt : PropTypes.instanceOf(Date), 
    updatedAt : PropTypes.instanceOf(Date), */
}
export default Post;