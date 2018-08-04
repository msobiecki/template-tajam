const defaultState = {
  data: [],
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "FETCH_BANNER": {
      return {
        ...state,
        data: action.payload.data,
      }
    }

    default:
      return state;
  }
}
