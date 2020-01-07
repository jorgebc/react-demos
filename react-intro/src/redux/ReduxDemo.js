import React from "react";

import store from "./combinedReducers";

import {changeCount} from "./reducers/count";
import {addFavoriteThing, removeFavoriteThing} from "./reducers/favoriteThings";
import {setVideoTitle, upVoteVideo, downVoteVideo} from "./reducers/youTubeVideo";
import {setUserDetails, removeUserDetails} from "./reducers/user";

export default function ReduxDemo() {

    console.log(store);

    store.subscribe(() => {
        console.log(store.getState())
    });

    store.dispatch(changeCount(4));
    store.dispatch(addFavoriteThing("uno"));
    store.dispatch(addFavoriteThing("otro"));
    store.dispatch(removeFavoriteThing("uno"));
    store.dispatch(setVideoTitle("Title"));
    store.dispatch(upVoteVideo());
    store.dispatch(downVoteVideo());

    store.dispatch(setUserDetails({
        firstName: "First",
        lastName: "Last",
        id: 21,
        email: "email"
    }));

    store.dispatch(setUserDetails({
        email: "email2"
    }));

    store.dispatch(removeUserDetails());

    return (
        <React.Fragment>
            <h1>Redux working!</h1>
            <p>Current state: {JSON.stringify(store.getState())}</p>
        </React.Fragment>
    )
}