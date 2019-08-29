import React from 'react';
import PropTypes from 'prop-types'; //TODO: ADD PROPTYPES


const PostComment = (props) => {
  console.log(props);
  const {onSubmit,onChange} = props;
    return (
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor=''>Leave comment</label>
          <textarea name='message' onChange={onChange} className='form-control' />
        </div>
        <button type='submit' className='btn btn-success float-right'>
          Add Comment
        </button>
      </form>
    );
  };

export default PostComment;