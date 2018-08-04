const defaultState = {
  title: "",
  images: {
    default: "",
    mobile: "",
  },
  video: "",
  poster: "",
  fetched: false,
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "FETCH_HEADLINE": {
      return {
        ...state,
        title: action.payload.title,
        images: action.payload.images,
        video: action.payload.video,
        poster: action.payload.poster,
        fetched: true,
      }
    }
    case "FLUSH_HEADLINE": {
      return {
        ...state,
        title: "",
        images: {
          default: "",
          mobile: "",
        },
        video: "",
        poster: "",
        fetched: false,
      }
    }

    default:
      return state;
  }
}

