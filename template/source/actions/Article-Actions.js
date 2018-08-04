import { data } from "../_data/Article-Data";

// Fetch Article
export function fetchArticle(type, name) {
  return dispatch => {
    return dispatch({
      type: "FETCH_ARTICLE",
      payload: data[type][name],
    })
  }
}
