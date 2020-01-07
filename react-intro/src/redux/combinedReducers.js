import countReducer from "./reducers/count";
import favoriteThingsReducer from "./reducers/favoriteThings";
import youTubeVideoReducer from "./reducers/youTubeVideo";
import userReducer from "./reducers/user";

const redux = require("redux");
const {combineReducers, createStore} = redux;

const rootReducer = combineReducers({
    count: countReducer,
    favoriteThings: favoriteThingsReducer,
    youtubeVideo: youTubeVideoReducer,
    user: userReducer
});

const store = createStore(rootReducer);
export default store