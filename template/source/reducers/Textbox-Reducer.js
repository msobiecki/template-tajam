const defaultState = {
  title: "",
  text: "",
  image: "",
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "FETCH_TEXTBOX": {
      return {
        ...state,
        title: action.payload.title,
        text: action.payload.text,
        image: action.payload.image,
      }
    }

    default:
      return state;
  }
}
