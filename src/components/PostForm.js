import React, { Component } from 'react';

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
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => console.log(data));
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

export default PostForm;
