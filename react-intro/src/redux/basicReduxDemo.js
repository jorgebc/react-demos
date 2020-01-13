const redux = require("redux");

function changeCount(amount) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}

function increment() {
    return {
        type: "INCREMENT",
    }
}

function decrement() {
    return {
        type: "DECREMENT"
    }
}

function double() {
    return {
        type: "DOUBLE"
    }
}

function halve() {
    return {
        type: "HALVE"
    }
}

function addFavoriteThing(thing) {
    return {
        type: "ADD_FAVORITE_THING",
        payload: thing
    }
}

function removeFavoriteThing(thing) {
    return {
        type: "REMOVE_FAVORITE_THING",
        payload: thing
    }
}

function setVideoTitle(title) {
    return {
        type: "SET_VIDEO_TITLE",
        payload: title
    }
}

function upVoteVideo() {
    return {
        type: "UP_VOTE_VIDEO"
    }
}

function downVoteVideo() {
    return {
        type: "DOWN_VOTE_VIDEO"
    }
}

const initialState = {
    count: 0,
    favoriteThings: [],
    youtubeVideo: {
        title: "",
        viewCount: 0,
        votes: {
            up: 0,
            down: 0
        }
    }
};

function reducer(state = initialState, action) {
    switch (action.type) {

        case "CHANGE_COUNT":
            return {
                ...state,
                count: state.count + action.payload
            };

        case "INCREMENT" :
            return {
                ...state,
                count: state.count + 1
            };

        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            };

        case "DOUBLE":
            return {
                ...state,
                count: state.count * 2
            };

        case "HALVE":
            return {
                ...state,
                count: Math.round(state.count / 2)
            };

        case "ADD_FAVORITE_THING":
            return {
                ...state,
                favoriteThings: [...state.favortieThings, action.payload]
            };

        case "REMOVE_FAVORITE_THING":

            const updatedFavoriteThings = state.favortieThings
                .filter(favoriteThing => favoriteThing.toLowerCase() !== action.payload.toLowerCase());

            return {
                ...state,
                favoriteThings: updatedFavoriteThings
            };

        case "SET_VIDEO_TITLE":
            return {
                ...state,
                youtubeVideo: {
                    ...state.youtubeVideo,
                    title: action.payload
                }
            };

        case "UP_VOTE_VIDEO":
            return {
                ...state,
                youtubeVideo: {
                    ...state.youtubeVideo,
                    votes: {
                        ...state.youtubeVideo.votes,
                        up: state.youtubeVideo.votes.up + 1
                    }
                }
            };

        case "DOWN_VOTE_VIDEO":
            return {
                ...state,
                youtubeVideo: {
                    ...state.youtubeVideo,
                    votes: {
                        ...state.youtubeVideo.votes,
                        down: state.youtubeVideo.votes.down - 1
                    }
                }
            };

        default:
            return state
    }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());