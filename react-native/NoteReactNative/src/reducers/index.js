import NotesReducer from './NotesReducer';
import ActiveNoteReducer from './ActiveNoteReducer';

import {combineReducers, createStore} from "redux";
import devToolsEnhancer from 'remote-redux-devtools';

const allReducers = combineReducers({
  notes: NotesReducer,
  activeNote: ActiveNoteReducer
});

const store = createStore(allReducers, devToolsEnhancer());
export default store;

