import { data } from "../_data/Banner-Data";

// Fetch Banner
export function fetchBanner() {
  return dispatch => {
    return dispatch({
      type: "FETCH_BANNER",
      payload: data,
    })
  }
}
