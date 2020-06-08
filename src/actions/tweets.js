export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

// Action creator
export function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets,
    }
}