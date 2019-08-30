import React from 'react';


const CategoryPostsForm = (props) => {
  //console.log(props);
  const {onSubmit,onChange} = props;
    return (
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor=''>Get posts by category : </label>
          <textarea name='message' onChange={onChange} className='form-control' />
        </div>
        <button type='submit' className='btn btn-success float-right'>
          Get posts
        </button>
      </form>
    );
  };

export default CategoryPostsForm;