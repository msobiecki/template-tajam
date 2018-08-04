const defaultState = {
  title: "",
  data: [],
  link: {
    text: "",
    href: "",
    external: false
  }
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "FETCH_WORKS": {
      return {
        ...state,
        title: action.payload.title,
        data: action.payload.data,
        link: action.payload.link,
      }
    }

    default:
      return state;
  }
}
