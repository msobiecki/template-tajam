import { data } from "../_data/Page-Data";

// Fetch Page
export function fetchPage(type) {
  return dispatch => {
    return dispatch({
      type: "FETCH_PAGE",
      payload: data[type],
    })
  }
}
