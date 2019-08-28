import React from 'react';
import PropTypes from 'prop-types'; //TODO: ADD PROPTYPES


const AddComment = ({ onSubmit, onChange }) => {
    return (
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor=''>Leave comment</label>
          <textarea name='text' onChange={onChange} className='form-control' />
        </div>
        <button type='submit' className='btn btn-success float-right'>
          Add Comment
        </button>
      </form>
    );
  };