const defaultState = {
  id: null,
  title: "",
  content: "",
  page_type_id: null,
  headline_id: null,
  map_box_id: null,
  fetched: false,
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "FETCH_PAGE": {
      return {
        ...state,
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
        page_type_id: action.payload.page_type_id,
        headline_id: action.payload.headline_id,
        map_box_id: action.payload.map_box_id,
        fetched: true,
      }
    }

    default:
      return state;
  }
}
