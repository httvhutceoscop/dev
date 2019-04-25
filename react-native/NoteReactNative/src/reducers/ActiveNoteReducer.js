/**
 * Mr. Nguyen Tien Viet
 * Email: tienvietnguyen1110@gmail.com
 * Github: https://github.com/httvhutceoscop
 * Website: https://toilamit.com
 */

import {actionTypes} from "../actions/actionTypes";

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_NOTE:
      console.log(action);
      return Object.assign({selectedNote: action.payload}, state, );
      // return {};
    default:
      return state;
  }
}