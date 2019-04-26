import NotesReducer from './NotesReducer';
import {combineReducers, createStore} from "redux";
import devToolsEnhancer from 'remote-redux-devtools';

const allReducers = combineReducers({
  notes: NotesReducer,
});

const store = createStore(allReducers, devToolsEnhancer());
export default store;

