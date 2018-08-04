const defaultState = {
  data: {},
  fetched: false
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "FETCH_ARTICLES": {
      console.log(action.payload)
      return {
        ...state,
        data: action.payload,
        fetched: true,
      }
    }
    case "FLUSH_ARTICLES": {
      return {
        ...state,
        data: {},
        fetched: false,
      }
    }

    default:
      return state;
  }
}

