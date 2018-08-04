const defaultState = {
  header: {},
  footer: {
    brand: {
      logo: "",
      text: "",
    },
    info: {
      title: "",
      data: [],
    },
    newsletter: {
      title: "",
      input: {
        placeholder: "",
      }
    },
    social: [],
    copyright: {
      text: "",
      link: []
    }
  },
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "FETCH_SYSTEM": {
      return {
        ...state,
        footer: action.payload.footer
      }
    }

    default:
      return state;
  }
}
