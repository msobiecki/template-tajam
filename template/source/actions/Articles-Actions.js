import { data } from "../_data/Articles-Data";

// Fetch Articles
export function fetchArticles(id) {
  return dispatch => {
    return dispatch({
      type: "FETCH_ARTICLES",
      payload: data[id],
    })
  }
}

// Flush Articles
export function flushArticles() {
  return dispatch => {
    return dispatch({
      type: "FLUSH_ARTICLES",
    })
  }
}
