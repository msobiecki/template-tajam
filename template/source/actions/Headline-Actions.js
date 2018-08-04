import { data } from "../_data/Headline-Data";

// Fetch Headline
export function fetchHeadline(id) {
  return dispatch => {
    return dispatch({
      type: "FETCH_HEADLINE",
      payload: data[id],
    })
  }
}

// Flush Headline
export function flushHeadline() {
  return dispatch => {
    return dispatch({
      type: "FLUSH_HEADLINE",
    })
  }
}
