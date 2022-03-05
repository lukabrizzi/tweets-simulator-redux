export const addTweetActions = state => {
    return {
        type: 'ADD_TWEET',
        payload: state
    }
}

export const deleteTweetActions = id => {
    return {
        type: 'DELETE_TWEET',
        payload: id
    }
}