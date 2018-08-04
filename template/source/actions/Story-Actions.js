import { data } from "../_data/Story-Data";

// Fetch Story
export function fetchStory() {
  return dispatch => {
    return dispatch({
      type: "FETCH_STORY",
      payload: data,
    })
  }
}
