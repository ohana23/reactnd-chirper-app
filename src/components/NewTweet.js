import React, { Component } from 'react';

// this is going to be a controlled component meaning react is going to be 
// in control of the component text

// we're not using this component's state anywhere else in our app,
// so it is totally fine to juse use normal react state 

class NewTweet extends Component {
    state = {
        text: '',
    }

    handleChange = (e) => {
        const text = e.target.value;

        this.setState(() => ({
            text // by the way, this is shorthand for text: text
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // todo: add tweet to the store

        const { text } = this.state;

        console.log("New tweet: ", text);

        // reset the text field to empty
        this.setState(() => ({
            text: ''
        }));
    }

    render() {

        const { text } = this.state;

        // todo: redirect to home view on submit

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

export default NewTweet;