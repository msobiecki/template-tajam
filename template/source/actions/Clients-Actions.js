import { data } from "../_data/Clients-Data";

// Fetch Clients
export function fetchClients() {
  return dispatch => {
    return dispatch({
      type: "FETCH_CLIENTS",
      payload: data,
    })
  }
}
