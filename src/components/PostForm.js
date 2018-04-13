import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createPost} from '../actions/postActions';

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createPost(this.state);
    }

    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title</label><br />
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    </div><br />

                    <div>
                        <label>Description</label><br />
                        <textarea type="text" name="body" value={this.state.body} onChange={this.handleChange} />
                    </div><br />

                    <input type="submit" value="Create" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    post: state.posts.item
});

export default connect(mapStateToProps, {createPost})(PostForm );
