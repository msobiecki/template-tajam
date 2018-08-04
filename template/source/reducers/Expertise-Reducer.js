const defaultState = {
  title: "",
  subtitle: "",
  data: [],
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "FETCH_EXPERTISE": {
      return {
        ...state,
        title: action.payload.title,
        subtitle: action.payload.subtitle,
        data: action.payload.data,
      }
    }

    default:
      return state;
  }
}
