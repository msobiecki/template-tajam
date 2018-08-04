import { data } from "../_data/Textbox-Data";

// Fetch Textbox
export function fetchTextbox() {
  return dispatch => {
    return dispatch({
      type: "FETCH_TEXTBOX",
      payload: data,
    })
  }
}
