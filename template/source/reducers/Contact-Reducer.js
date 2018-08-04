const defaultState = {
  title: "",
  data: [],
  submit: {
    text: ""
  }
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "FETCH_CONTACT": {
      return {
        ...state,
        title: action.payload.title,
        data: action.payload.data,
        submit: action.payload.submit,
      }
    }

    default:
      return state;
  }
}
