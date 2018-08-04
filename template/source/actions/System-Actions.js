import { data } from "../_data/System-Data";

// Fetch System
export function fetchSystem() {
  return dispatch => {
    return dispatch({
      type: "FETCH_SYSTEM",
      payload: data,
    })
  }
}
