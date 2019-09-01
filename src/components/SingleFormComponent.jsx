import React from "react";
import PropTypes from 'prop-types';


const SingleFormComponent = (props) => {
  //console.log(props);
  const {inputName, onSubmit, onChange} = props;
    return (
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor={inputName}>Get posts by {inputName} : </label>
          <textarea name={inputName} onChange={onChange} className='form-control' />
        </div>
        <button type='submit' className='btn btn-success float-right'>
          Get posts
        </button>
      </form>
    );
  };
  
  SingleFormComponent.propTypes = {
    inputName:PropTypes.string,
    onSubmit:PropTypes.func, 
    onChange:PropTypes.func

  }

export default SingleFormComponent;