import React from 'react';

const PostComment = (props) => {
  //console.log(props);
  const {onSubmit,onChange} = props;
    return (
      <div className = 'm-3'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor=''>Post comment below : (comment must be at least 5 characters long)</label>
            <textarea name='message' onChange={onChange} className='form-control' />
          </div>
          <button type='submit' className='btn btn-success float-right'>
            Post Comment
          </button>
        </form>
      </div>
    );
  };

export default PostComment;