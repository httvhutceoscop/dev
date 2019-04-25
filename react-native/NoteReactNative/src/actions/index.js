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
 * @returns {{payload: *, type: string}}
 */
export const selectNote = (note) => {
  alert(`You clicked a note with title = ${note.title}`);
  return {
    type: actionTypes.SELECT_NOTE, // required - string
    payload: note // optional - following data
  }
};

export const getNotes = (data) => {
  return {
    type: actionTypes.FETCH_NOTES,
    payload: data
  }
};