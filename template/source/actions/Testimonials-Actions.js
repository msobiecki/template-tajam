import { data } from "../_data/Testimonials-Data";

// Fetch Testimonials
export function fetchTestimonials() {
  return dispatch => {
    return dispatch({
      type: "FETCH_TESTIMONIALS",
      payload: data,
    })
  }
}
