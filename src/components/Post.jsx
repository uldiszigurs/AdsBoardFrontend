import React from 'react';
import PropTypes from 'prop-types';
import image from '../image/testImage.jpeg';
import { Link } from "react-router-dom";

const Post = (props) => {
    const {category, _id, username, title, description, createdAt, updatedAt} = props;
    console.log('category, id, username, title, description, createdAt, updatedAt',category, _id, username, title, description, createdAt, updatedAt);
    return (
        <div className = 'container-fluid' key = {_id}>
            <Link to = {`/post/${_id}`}>{title}</Link>
            <img alt='something went wrong' src={image}/>
            <div className = 'row'>
                <ul className = 'list-unstyled'>
                    <li>{username}</li>
                    <li>{description}</li>
                    <li>{category}</li>
                    <li>{createdAt}</li>
                    <li>{updatedAt}</li>
                </ul>
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