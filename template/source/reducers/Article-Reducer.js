const defaultState = {
  id: null,
  title: "",
  content: "",
  headline_id: null,
  map_box_id: null,
  page_id: null,
  author_id: null,
  href: "",
  external: null,
  fetched: false
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "FETCH_ARTICLE": {
      console.log(action.payload)
      return {
        ...state,
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
        headline_id: action.payload.headline_id,
        map_box_id: action.payload.map_box_id,
        page_id: action.payload.page_id,
        author_id: action.payload.author_id,
        href: action.payload.href,
        external: action.payload.external,
        fetched: true,
      }
    }

    default:
      return state;
  }
}

