/**
 * Mr. Nguyen Tien Viet
 * Email: tienvietnguyen1110@gmail.com
 * Github: https://github.com/httvhutceoscop
 * Website: https://toilamit.com
 */

import {actionTypes} from "../actions/actionTypes";
import {removeItemInArray, inArray} from "../helpers/CommonFunc";

const initialState = {
  data: null,
  selectAll: false,
  editAll: false,
  selectedNote: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NOTES:
      return {
        ...state,
        data: action.payload
      };
    case actionTypes.SELECT_NOTE:
      let index = action.payload.index;
      let arrSelectedNote = state.selectedNote;
      if (inArray(arrSelectedNote, index)) {
        arrSelectedNote = removeItemInArray(state.selectedNote, index);
      } else {
        arrSelectedNote = [...arrSelectedNote, index];
      }

      return {
        ...state,
        selectedNote: arrSelectedNote
      };
    case actionTypes.ADD_NOTE:
      return {
        ...state,
        data: [...state.data, action.note]
      };
    case actionTypes.SELECT_ALL:
      return {
        ...state,
        selectAll: !state.selectAll
      };
    case actionTypes.EDIT_ALL:
      return {
        ...state,
        editAll: !state.editAll
      };
    default:
      return state;
  }
}