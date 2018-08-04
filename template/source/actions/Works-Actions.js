import { data } from "../_data/Works-Data";

// Fetch Wroks
export function fetchWorks() {
  return dispatch => {
    return dispatch({
      type: "FETCH_WORKS",
      payload: data,
    })
  }
}
