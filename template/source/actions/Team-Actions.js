import { data } from "../_data/Team-Data";

// Fetch Team
export function fetchTeam() {
  return dispatch => {
    return dispatch({
      type: "FETCH_TEAM",
      payload: data,
    })
  }
}
