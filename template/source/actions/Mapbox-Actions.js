import { data } from "../_data/Mapbox-Data";

// Fetch Mapbox
export function fetchMapbox(id) {
  return dispatch => {
    return dispatch({
      type: "FETCH_MAPBOX",
      payload: data[id],
    })
  }
}

// Flush Mapbox
export function flushMapbox() {
  return dispatch => {
    return dispatch({
      type: "FLUSH_MAPBOX",
    })
  }
}
