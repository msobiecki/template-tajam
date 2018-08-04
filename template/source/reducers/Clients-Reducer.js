const defaultState = {
  title: "",
  data: [],
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "FETCH_CLIENTS": {
      return {
        ...state,
        title: action.payload.title,
        data: action.payload.data,
      }
    }

    default:
      return state;
  }
}
