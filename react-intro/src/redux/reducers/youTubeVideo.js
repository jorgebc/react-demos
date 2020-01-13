export function setVideoTitle(title) {
    return {
        type: "SET_VIDEO_TITLE",
        payload: title
    }
}

export function upVoteVideo() {
    return {
        type: "UP_VOTE_VIDEO"
    }
}

export function downVoteVideo() {
    return {
        type: "DOWN_VOTE_VIDEO"
    }
}

const initialState = {
    title: "",
    viewCount: 0,
    votes: {
        up: 0,
        down: 0
    }
};

export default function youTubeVideoReducer(youTubeVideo = initialState, action) {

    switch (action.type) {

        case "SET_VIDEO_TITLE":
            return {
                ...youTubeVideo,
                title: action.payload
            };

        case "UP_VOTE_VIDEO":
            return {
                ...youTubeVideo,
                votes: {
                    ...youTubeVideo.votes,
                    up: youTubeVideo.votes.up + 1
                }
            };

        case "DOWN_VOTE_VIDEO":
            return {
                ...youTubeVideo,
                votes: {
                    ...youTubeVideo.votes,
                    down: youTubeVideo.votes.down + 1
                }
            };

        default:
            return youTubeVideo;
    }
}