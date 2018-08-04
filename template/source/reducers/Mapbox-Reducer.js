const defaultState = {
  lat: null,
  lng: null,
  markers: [],
  fetched: false,
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "FETCH_MAPBOX": {
      return {
        ...state,
        lat: action.payload.lat,
        lng: action.payload.lng,
        markers: action.payload.markers,
        fetched: true,
      }
    }
    case "FLUSH_MAPBOX": {
      return {
        ...state,
        lat: null,
        lng: null,
        markers: [],
        fetched: false,
      }
    }

    default:
      return state;
  }
}

