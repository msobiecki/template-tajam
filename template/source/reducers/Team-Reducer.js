const defaultState = {
  title: "",
  subtitle: "",
  data: [],
  details: "",
  link: {
    text: "",
    href: "",
    external: false
  }
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "FETCH_TEAM": {
      return {
        ...state,
        title: action.payload.title,
        subtitle: action.payload.subtitle,
        data: action.payload.data,
        details: action.payload.details,
        link: action.payload.link,
      }
    }

    default:
      return state;
  }
}
