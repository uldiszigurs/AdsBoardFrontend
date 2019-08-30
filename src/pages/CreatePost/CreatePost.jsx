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
    //console.log(this.state);
  };

  onSubmit = event => {
    event.preventDefault();
    const media = this.fileInput.current.files[0];
    //console.log('media = ', media);
    if (!media) {
      console.log("Media is required");
      return;
    }
    const { description, title, category } = this.state; //token, media, username, title, description, category
    //console.log('this.props.user.username = ', this.props.user);
    //console.log('createPost arguments',this.props.user.token, media, this.props.user.username, title, description, category);
    this.props.createPost(this.props.user.token, media, this.props.user.username, title, description, category);
  };

  render() {
    const { createdPostId } = this.props;
    if (createdPostId) {
      this.props.clearCreatedPostId(); //TODO: CAREFUL! could set timeout and execute this :D 
      return <Redirect to={`/post/${createdPostId}`}/>;
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
