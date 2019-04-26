/**
 * Mr. Nguyen Tien Viet
 * Email: tienvietnguyen1110@gmail.com
 * Github: https://github.com/httvhutceoscop
 * Website: https://toilamit.com
 */

import { actionTypes } from './actionTypes';

/**
 * An action creator
 * @param note
 * @param index
 * @returns {{payload: *, type: string}}
 */
export const selectNote = (note, index) => {
  return {
    type: actionTypes.SELECT_NOTE, // required - string
    payload: {note, index} // optional - following data
  }
};

export const getNotes = (data) => {
  return {
    type: actionTypes.FETCH_NOTES,
    payload: data
  }
};

export const editAll = () => {
  console.log('aaaaaa');
  return {
    type: actionTypes.EDIT_ALL
  }
};

export const selectAll = () => {
  console.log('select all');
  return {
    type: actionTypes.SELECT_ALL
  }
};

export const addNote = note => {
  return {
    type: actionTypes.ADD_NOTE,
    payload: note
  }
};