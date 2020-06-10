import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddTweet } from '../actions/tweets';
import { Redirect } from 'react-router-dom';

// this is going to be a controlled component meaning react is going to be 
// in control of the component text

// we're not using this component's state anywhere else in our app,
// so it is totally fine to juse use normal react state 

class NewTweet extends Component {
    state = {
        text: '',
        toHome: false,
    }

    handleChange = (e) => {
        const text = e.target.value;

        this.setState(() => ({
            text // by the way, this is shorthand for "text: text"
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { text } = this.state;
        const { dispatch, id } = this.props;

        dispatch(handleAddTweet(text, id));

        // reset the text field to be empty
        this.setState(() => ({
            text: '',
            toHome: id ? false: true,
        }));
    }

    render() {

        const { text, toHome } = this.state;

        if (toHome === true) {
            return <Redirect to='/' />
        }

        const tweetLeft = 280 - text.length;

        return (
            <div>
                <h3 className='center'>Compose new Tweet</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="What's happening?"
                        value={text}
                        onChange={this.handleChange}
                        className='textarea'
                        maxLength={280}
                    />
                    {tweetLeft <= 100 && (
                        <div className='tweet-length'>
                            {tweetLeft}
                        </div>
                    )}
                    <button
                        className='btn'
                        type='submit'
                        disabled={text === ''}>
                            Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default connect()(NewTweet);