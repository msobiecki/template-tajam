const defaultState = {
  title: "",
  poster: null,
  video: null,
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "FETCH_STORY": {
      return {
        ...state,
        title: action.payload.title,
        poster: action.payload.poster,
        video: action.payload.video,
      }
    }

    default:
      return state;
  }
}
