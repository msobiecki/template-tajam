import { data } from "../_data/Contact-Data";
import { client } from "./";

const url = "/contact"

// Fetch Contact
export function fetchContact() {
  return dispatch => {
    return dispatch({
      type: "FETCH_CONTACT",
      payload: data,
    })
  }
}

// Send Contact
export function sendContact(contact) {
  return dispatch => {
    return dispatch({
      type: "SEND_CONTACT",
      payload: client.post(url, contact),
    })
  }
}
