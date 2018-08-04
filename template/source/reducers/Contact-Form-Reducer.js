const defaultState = {
  loading: false,
  success: false,
  errors: {}
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "SEND_CONTACT_PENDING": {
      return {
        ...state,
        loading: true,
        success: false,
        errors: {},
      }
    }

    case "SEND_CONTACT_FULFILLED": {
      return {
        ...state,
        loading: false,
        success: true,
        errors: {},
      }
    }

    case "SEND_CONTACT_REJECTED": {
      let errors;
      if (!action.error) {
        const data = action.payload.respone.data;
        if (!data.errors.length > 0) {
          errors = { global: data.message }
          data.errors.map((item) => {
            errors[item.path] = item;
          })
        }
      }
      else {
        errors = { global: "Error: Network Error" };
      }
      return {
        ...state,
        loading: false,
        success: false,
        errors: errors
      }
    }

    default:
      return state;
  }
}
