/**
 * Mr. Nguyen Tien Viet
 * Email: tienvietnguyen1110@gmail.com
 * Github: https://github.com/httvhutceoscop
 * Website: https://toilamit.com
 */

import {actionTypes} from "../actions/actionTypes";

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NOTES:
      return action.payload;
    default:
      return state;
  }
}