import { client } from "./";

const url = "/newsletter"

// Send Newsletter
export function sendNewsletter(newsletter) {
  return dispatch => {
    return dispatch({
      type: "SEND_NEWSLETTER",
      payload: client.post(url, newsletter),
    })
  }
}
