import { FETCH_USER_ACTION } from "../actions/types";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER_ACTION:
      return action.payload || false;
    default:
      return state;
  }
}
