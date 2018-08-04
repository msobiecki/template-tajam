import { data } from "../_data/Expertise-Data";

// Fetch Expertise
export function fetchExpertise() {
  return dispatch => {
    return dispatch({
      type: "FETCH_EXPERTISE",
      payload: data,
    })
  }
}
