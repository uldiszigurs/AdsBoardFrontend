import React from 'react';
import PropTypes from 'prop-types';
import image from '../image/testImage.jpeg';

const Post = (props) => {
    const {category, id, username, title, description, createdAt, updatedAt} = props;
    return (
        <div className = 'container-fluid' key = {id}>
            <img alt='something went wrong' src={image}/>
            <div className = 'row'>
                
            </div>
            <ul className = 'list-unstyled'>
                <li>{category}</li>
                <li>{username}</li>
                <li>{title}</li>
                <li>{description}</li>
                <li>{createdAt}</li>
                <li>{updatedAt}</li>
            </ul>
            
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