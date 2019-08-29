import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class AddPost extends Component {
  state = {
    description: "",
    title: "",
    category: "",
    media: ""
  };
  fileInput = React.createRef();

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    const media = this.fileInput.current.files[0];
    if (!media) {
      console.log("Media is required");
      return;
    }
    const { text } = this.state;
    this.props.addPost(this.props.user, { text, media });
  };

  render() {
    const { isCreated } = this.props;
    if (isCreated._id) {
      return <Redirect to={`/posts/${isCreated._id}`} />;
    }
    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
            <label htmlFor=''>Title</label>
            <input
                name='title'
                type='text'
                className='form-control'
                onChange={this.onChange}
            />
            <label htmlFor=''>Description</label>
            <input
                name='description'
                type='text'
                className='form-control'
                onChange={this.onChange}
            />
            <label htmlFor=''>Category</label>
            <input
                name='category'
                type='text'
                className='form-control'
                onChange={this.onChange}
            />
        </div>
        <div className='form-group'>
            <label htmlFor=''>Image</label>
            <input
                name='media'
                type='file'
                className='form-control'
                ref={this.fileInput}
            />
        </div>
        <button type='submit' className='btn btn-secondary float-right'>
        Create
        </button>
      </form>
    );
  }
}

export default AddPost;
